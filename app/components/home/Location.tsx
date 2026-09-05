"use client";

import { HiOutlineLocationMarker, HiOutlineArrowRight } from "react-icons/hi";
import { SITE } from "@/lib/data";
import { useReveal } from "@/app/components/hooks/useReveal";

export default function Location() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section ref={ref} className="container-crown py-28 md:py-36">
      <p data-reveal className="label-eyebrow mb-5">
        Location
      </p>
      <h2
        data-reveal
        className="font-display text-balance max-w-xl text-4xl leading-tight text-ivory md:text-5xl"
      >
        Celebrate in the heart of Noida
      </h2>
      <div data-reveal className="rule mt-8 max-w-xs" />

      <div className="mt-14 grid gap-6 md:grid-cols-12">
        <div
          data-reveal
          className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-sage-dim bg-ink-2 p-8 transition-colors duration-500 hover:border-gold/40 md:col-span-4"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/10 blur-2xl transition-opacity duration-500 group-hover:opacity-80"
          />
          <div className="relative">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
              <HiOutlineLocationMarker size={22} className="text-gold" />
            </span>
            <p className="mt-5 font-display text-xl text-ivory">
              {SITE.name}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ivory-dim">
              {SITE.address}
            </p>
          </div>
          <a
            href="https://maps.google.com/?q=Wedding+Crown+Sector+73+Noida"
            target="_blank"
            rel="noreferrer"
            className="relative mt-8 inline-flex items-center gap-2 border-b border-gold pb-1 text-sm text-gold transition-all hover:gap-3 hover:opacity-80"
          >
            Get Directions
            <HiOutlineArrowRight size={16} />
          </a>
        </div>

        <div
          data-reveal
          className="overflow-hidden rounded-2xl border border-sage-dim shadow-[0_20px_60px_-30px_rgba(0,0,0,0.5)] md:col-span-8"
        >
          <iframe
            title="Wedding Crown location map"
            src={SITE.mapEmbed}
            className="h-72 w-full grayscale invert-0 md:h-full"
            style={{ filter: "invert(0.92) hue-rotate(180deg)" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}