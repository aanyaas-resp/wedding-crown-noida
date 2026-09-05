"use client";

import { HiOutlinePhone } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa6";
import { SITE } from "@/lib/data";

export default function FloatingButtons() {
  return (
    <div
      className="fixed bottom-5 right-5 z-40 flex flex-col items-center gap-3"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={SITE.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Wedding Crown on WhatsApp"
        className="group relative flex h-13 w-13 h-[52px] w-[52px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition-transform duration-300 hover:scale-105 active:scale-95"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping" />
        <FaWhatsapp size={24} className="relative z-10" />
      </a>
<a
      
        href={SITE.phone1Href}
        aria-label="Call Wedding Crown now"
        className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-gold text-ink shadow-lg shadow-black/30 transition-transform duration-300 hover:scale-105 active:scale-95"
      >
        <HiOutlinePhone size={22} />
      </a>
    </div>
  );
}