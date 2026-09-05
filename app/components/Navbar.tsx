"use client";

import { useEffect, useState } from "react";
import { HiOutlineMenu, HiOutlineX, HiOutlinePhone } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa6";
import { NAV_LINKS, SITE } from "@/lib/data";
import { cn } from "@/lib/utils";
import ContactModal from "./Contactmodal";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled || open
          ? "bg-ink/90 backdrop-blur-md border-b border-sage-dim"
          : "bg-gradient-to-b from-ink/70 to-transparent"
      )}
    >
      <nav className="container-crown flex h-20 items-center justify-between">
        <a href="#home" className="font-display text-2xl tracking-wide text-ivory">
          Wedding <span className="text-gold">Crown</span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-ivory-dim transition-colors duration-300 hover:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="btn-gold transition-transform duration-300 hover:scale-[1.03] active:scale-95"
          >
            Book a Visit
          </button>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="text-ivory md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <HiOutlineX size={26} /> : <HiOutlineMenu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-sage-dim bg-ink px-6 pb-8 pt-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
<a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-sage-dim/60 py-4 text-ivory-dim"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => {
              setOpen(false);
              setModalOpen(true);
            }}
            className="btn-gold mt-6 w-full"
          >
            Book a Visit
          </button>

          <div className="mt-5 flex items-center justify-center gap-6 text-sm text-ivory-dim">
            <a href={SITE.phone1Href} className="flex items-center gap-2 hover:text-gold">
              <HiOutlinePhone size={16} />
              {SITE.phone1}
            </a>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-gold"
            >
              <FaWhatsapp size={16} />
              WhatsApp
            </a>
          </div>
        </div>
      )}

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </header>
  );
}