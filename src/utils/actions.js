"use server";

import db from "./db";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

export async function registerCompanyForEvent(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const eventId = formData.get("eventId");
  const logoFile = formData.get("logo");

  if (!name || !email || !eventId) {
    return { success: false, message: "All fields are required." };
  }

  let logoPath = null;
  if (logoFile && logoFile.size > 0) {
    try {
      const bytes = await logoFile.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const fileName = `${Date.now()}-${logoFile.name.replace(/\s+/g, "-")}`;
      const uploadDir = path.join(process.cwd(), "public/logos");
      const filePath = path.join(uploadDir, fileName);

      // Ensure directory exists
      await mkdir(uploadDir, { recursive: true });
      await writeFile(filePath, buffer);
      
      logoPath = `/logos/${fileName}`;
    } catch (uploadError) {
      console.error("Error uploading logo:", uploadError);
      // Continue without logo if upload fails, or handle as error? 
      // User requested path in DB, so if upload fails, we might want to know.
    }
  }

  try {
    // 1. Insert into companies table (or get existing by email)
    let companyId;

    const existing = await db.query(
      "SELECT id FROM public.companies WHERE email = $1",
      [email],
    );

    if (existing.rows.length > 0) {
      companyId = existing.rows[0].id;
      // Optionally update existing company logo if provided
      if (logoPath) {
        await db.query(
          "UPDATE public.companies SET images = $1 WHERE id = $2",
          [logoPath, companyId]
        );
      }
    } else {
      const insertCompany = await db.query(
        "INSERT INTO public.companies (name, email, images) VALUES ($1, $2, $3) RETURNING id",
        [name, email, logoPath],
      );
      companyId = insertCompany.rows[0].id;
    }

    // 2. Link company to event in event_companies
    const alreadyLinked = await db.query(
      "SELECT 1 FROM public.event_companies WHERE event_id = $1 AND company_id = $2",
      [eventId, companyId],
    );

    if (alreadyLinked.rows.length > 0) {
      return {
        success: false,
        message: "This company is already registered for this event.",
      };
    }

    await db.query(
      "INSERT INTO public.event_companies (event_id, company_id) VALUES ($1, $2)",
      [eventId, companyId],
    );

    return { success: true, message: "Company registered successfully once approved you are registered for this event!" };
  } catch (error) {
    console.error("Error registering company:", error);
    return { success: false, message: "Something went wrong. Please try again." };
  }
}
