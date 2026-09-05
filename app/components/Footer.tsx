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
    <footer className="border-t border-sage-dim bg-ink-2">
      <div className="container-crown grid gap-12 py-16 sm:py-20 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="font-display text-2xl tracking-wide text-ivory">
            Wedding <span className="text-gold">Crown</span>
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory-dim">
            Luxury Wedding &amp; Banquet Venue in Noida — elegant spaces,
            beautiful décor and exceptional hospitality for your special
            occasions.
          </p>

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
              className="flex h-10 w-10 items-center justify-center border border-sage-dim text-ivory-dim transition-colors hover:border-gold hover:text-gold"
            >
              <FaInstagram size={17} />
            </a>
            <a
              href="#"
              aria-label="Wedding Crown on Facebook"
              className="flex h-10 w-10 items-center justify-center border border-sage-dim text-ivory-dim transition-colors hover:border-gold hover:text-gold"
            >
              <FaFacebookF size={16} />
            </a>
          </div>
        </div>

        <div className="md:col-span-2">
          <p className="label-eyebrow mb-5">Navigate</p>
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-ivory-dim transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="label-eyebrow mb-5">Our Halls</p>
          <ul className="flex flex-col gap-3">
            {HALLS.map((hall) => (
              <li key={hall.slug}>
                <a
                  href={`#${hall.slug}`}
                  className="text-sm text-ivory-dim transition-colors hover:text-gold"
                >
                  {hall.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="label-eyebrow mb-5">Contact</p>
          <ul className="flex flex-col gap-4 text-sm text-ivory-dim">
            <li>
              <a href={SITE.phone1Href} className="flex items-start gap-3 hover:text-gold">
                <HiOutlinePhone className="mt-0.5 shrink-0 text-gold" size={16} />
                {SITE.phone1}
              </a>
            </li>
            <li>
              <a href={SITE.phone2Href} className="flex items-start gap-3 hover:text-gold">
                <HiOutlinePhone className="mt-0.5 shrink-0 text-gold" size={16} />
                {SITE.phone2}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="flex items-start gap-3 hover:text-gold">
                <HiOutlineMail className="mt-0.5 shrink-0 text-gold" size={16} />
                {SITE.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <HiOutlineLocationMarker className="mt-0.5 shrink-0 text-gold" size={16} />
              {SITE.address}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-sage-dim">
        <div className="container-crown flex flex-col items-center justify-between gap-3 py-6 text-xs text-ivory-dim sm:flex-row">
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