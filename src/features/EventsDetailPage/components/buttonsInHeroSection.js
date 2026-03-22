"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import RegisterCompanyModal from "./RegisterCompanyModal";

export default function ButtonsInHeroSection({ eventId }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="bg-[#36B3BA] text-white px-7 py-2.5 rounded-full hover:bg-[#2fa1a6] transition-all text-sm"
      >
        Register as a Company
      </button>
      <button className="bg-white/10 backdrop-blur-md text-white border border-white/40 px-7 py-2.5 rounded-full hover:border-[#36B3BA] transition-all text-sm">
        Join as Candidate
      </button>

      {modalOpen &&
        createPortal(
          <RegisterCompanyModal
            eventId={eventId}
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
          />,
          document.body,
        )}
    </>
  );
}
