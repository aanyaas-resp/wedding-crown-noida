"use client";

import { useEffect, useState } from "react";
import { HiOutlinePhone } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa6";
import { NAV_LINKS, SITE } from "@/lib/data";
import { cn } from "@/lib/utils";
import ContactModal from "./Contactmodal";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeHref, setActiveHref] = useState(NAV_LINKS[0]?.href ?? "");
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav link for whichever section is centered in the viewport
  useEffect(() => {
    const sections = NAV_LINKS
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (mostVisible) {
          setActiveHref(`#${mostVisible.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

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
          {NAV_LINKS.map((link) => {
            const isActive = link.href === activeHref;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "group relative text-sm transition-colors duration-300",
                    isActive ? "text-gold" : "text-ivory-dim hover:text-gold"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 ease-crown",
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </a>
              </li>
            );
          })}
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

        {/* Morphing hamburger — two bars rotate into an X instead of swapping icons */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative flex h-11 w-11 items-center justify-center rounded-full border border-sage-dim text-ivory transition-colors hover:border-gold hover:text-gold md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative flex h-3.5 w-5 flex-col justify-between">
            <span
              className={cn(
                "h-[1.5px] w-full origin-center bg-current transition-transform duration-300 ease-crown",
                open && "translate-y-[6.5px] rotate-45"
              )}
            />
            <span
              className={cn(
                "h-[1.5px] w-full origin-center bg-current transition-transform duration-300 ease-crown",
                open && "-translate-y-[6.5px] -rotate-45"
              )}
            />
          </span>
        </button>
      </nav>

      {/* Scroll-progress bar */}
      <div
        aria-hidden="true"
        className="h-[2px] bg-gold/70 transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />

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
                    className={cn(
                      "block border-b border-sage-dim/60 py-4 transition-colors",
                      link.href === activeHref
                        ? "text-gold"
                        : "text-ivory-dim hover:text-gold"
                    )}
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