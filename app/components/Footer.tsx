"use client";

import { useState } from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa6";
import { HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { NAV_LINKS, SITE } from "@/lib/data";
import { HALLS } from "@/lib/halls";
import ContactModal from "./Contactmodal";

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false);
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-ivory">
      {/* Wave divider — sits above the footer box, curving down into it */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-14 -translate-y-[calc(100%-1px)] overflow-hidden sm:h-20 md:h-24"
      >
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <path
            d="M0,50 C240,90 480,10 720,50 C960,90 1200,10 1440,50 L1440,100 L0,100 Z"
            fill="var(--color-ivory)"
          />
        </svg>
      </div>

      {/* Decorative glow — clipped to its own box so it can't cause horizontal scroll */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      </div>

      <div className="container-crown relative grid gap-12 py-20 sm:py-24 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="font-display text-2xl tracking-wide hero-text">
            Wedding <span className="text-gold">Crown</span>
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed hero-text-dim">
            Luxury Wedding &amp; Banquet Venue in Noida — elegant spaces,
            beautiful décor and exceptional hospitality for your special
            occasions.
          </p>

          {/* .btn-ghost was already built with a light-on-dark token — turns out
              it's the perfect fit here, no override needed */}
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="btn-ghost mt-6 transition-transform duration-300 hover:scale-[1.03] active:scale-95"
          >
            Book a Visit
          </button>

          <div className="mt-8 flex items-center gap-4">
            <a
              href="#"
              aria-label="Wedding Crown on Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 hero-text-dim transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-gold/10 hover:text-gold"
            >
              <FaInstagram size={17} />
            </a>
            <a
              href="#"
              aria-label="Wedding Crown on Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 hero-text-dim transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-gold/10 hover:text-gold"
            >
              <FaFacebookF size={16} />
            </a>
          </div>
        </div>

        <div className="md:col-span-2">
          <p className="mb-5 text-xs tracking-[0.14em] text-gold">Navigate</p>
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm hero-text-dim transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="mb-5 text-xs tracking-[0.14em] text-gold">Our Halls</p>
          <ul className="flex flex-col gap-3">
            {HALLS.map((hall) => (
              <li key={hall.slug}>
                <a
                  href={`#${hall.slug}`}
                  className="text-sm hero-text-dim transition-colors hover:text-gold"
                >
                  {hall.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="mb-5 text-xs tracking-[0.14em] text-gold">Contact</p>
          <ul className="flex flex-col gap-4 text-sm hero-text-dim">
            <li>
              <a
                href={SITE.phone1Href}
                className="group flex items-start gap-3 hover:text-gold"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/15 transition-colors duration-300 group-hover:border-gold group-hover:bg-gold/10">
                  <HiOutlinePhone className="text-gold" size={13} />
                </span>
                {SITE.phone1}
              </a>
            </li>
            <li>
              <a
                href={SITE.phone2Href}
                className="group flex items-start gap-3 hover:text-gold"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/15 transition-colors duration-300 group-hover:border-gold group-hover:bg-gold/10">
                  <HiOutlinePhone className="text-gold" size={13} />
                </span>
                {SITE.phone2}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="group flex items-start gap-3 hover:text-gold"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/15 transition-colors duration-300 group-hover:border-gold group-hover:bg-gold/10">
                  <HiOutlineMail className="text-gold" size={13} />
                </span>
                {SITE.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/15">
                <HiOutlineLocationMarker className="text-gold" size={13} />
              </span>
              {SITE.address}
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-crown flex flex-col items-center justify-between gap-3 py-6 text-xs hero-text-dim sm:flex-row">
          <p>© {year} Wedding Crown. All rights reserved.</p>
          <p>
            Designed &amp; developed by{" "}
            <a
              href="https://aniketwebdev.in"
              target="_blank"
              rel="noreferrer"
              className="text-gold transition-opacity hover:opacity-80"
            >
              aniketwebdev.in
            </a>
          </p>
        </div>
      </div>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </footer>
  );
}