"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { registerCompanyForEvent } from "@/utils/actions";
import { FiX } from "react-icons/fi";

export default function RegisterCompanyModal({ eventId, isOpen, onClose }) {
  const [pending, setPending] = useState(false);

  if (!isOpen) return null;

  async function handleSubmit(e) {
    e.preventDefault();
    setPending(true);

    const formData = new FormData(e.target);
    formData.append("eventId", eventId);

    const result = await registerCompanyForEvent(formData);

    setPending(false);

    if (result.success) {
      toast.success(result.message);
      onClose();
    } else {
      toast.error(result.message);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 p-8 animate-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <FiX className="w-5 h-5" />
        </button>

        <h2 className="text-[#1A1A1A] text-2xl font-bold mb-2">
          Register as a Company
        </h2>
        <p className="text-gray-400 text-sm mb-8">
          Fill in your company details to attend this event.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
              Company Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="e.g. Acme Inc."
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1A1A1A] placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#36B3BA] focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
              Company Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="contact@company.com"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1A1A1A] placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#36B3BA] focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
              Company Logo
            </label>
            <input
              type="file"
              required
              name="logo"
              accept="image/*"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1A1A1A] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-[#36B3BA]/10 file:text-[#36B3BA] hover:file:bg-[#36B3BA]/20 transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={pending}
            className="w-full bg-[#36B3BA] text-white py-3 rounded-full font-bold text-sm hover:bg-[#2fa1a6] transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-4"
          >
            {pending ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
}
