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

  // Close mobile menu on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled || open
          ? "border-b border-sage-dim bg-ink/90 backdrop-blur-md"
          : "bg-gradient-to-b from-ink/70 to-transparent"
      )}
    >
      <nav className="container-crown flex h-20 items-center justify-between">
        <a
          href="#home"
          className="font-display text-2xl tracking-wide text-ivory transition-opacity hover:opacity-90"
        >
          Wedding <span className="text-gold">Crown</span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-sm text-ivory-dim transition-colors duration-300 hover:text-gold"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 ease-crown group-hover:w-full" />
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
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative flex h-11 w-11 items-center justify-center rounded-full border border-sage-dim text-ivory transition-colors hover:border-gold hover:text-gold md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <HiOutlineX size={22} /> : <HiOutlineMenu size={22} />}
        </button>
      </nav>

      {/* Mobile menu — animated height + fade, no abrupt show/hide */}
      <div
        className="grid overflow-hidden border-sage-dim transition-[grid-template-rows] duration-400 ease-crown md:hidden"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div
            className={cn(
              "border-t border-sage-dim bg-ink px-6 pb-8 pt-4 transition-opacity duration-300",
              open ? "opacity-100 delay-100" : "opacity-0"
            )}
          >
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-sage-dim/60 py-4 text-ivory-dim transition-colors hover:text-gold"
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
              className="btn-gold mt-6 w-full transition-transform duration-300 active:scale-95"
            >
              Book a Visit
            </button>

            <div className="mt-6 flex items-center justify-center gap-6 text-sm text-ivory-dim">
              <a
                href={SITE.phone1Href}
                className="flex items-center gap-2 rounded-full border border-sage-dim px-4 py-2 transition-colors hover:border-gold hover:text-gold"
              >
                <HiOutlinePhone size={16} className="text-gold" />
                {SITE.phone1}
              </a>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-sage-dim px-4 py-2 transition-colors hover:border-gold hover:text-gold"
              >
                <FaWhatsapp size={16} className="text-gold" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </header>
  );
}