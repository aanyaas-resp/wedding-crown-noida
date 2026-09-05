"use client";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { SITE } from "@/lib/data";
import { useReveal } from "@/app/components/hooks/useReveal";

export default function Location() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section ref={ref} className="container-crown py-28 md:py-36">
      <p data-reveal className="label-eyebrow mb-5">
        Location
      </p>
      <h2 data-reveal className="font-display text-balance max-w-xl text-4xl leading-tight text-ivory md:text-5xl">
        Celebrate in the heart of Noida
      </h2>

      <div className="mt-14 grid gap-6 md:grid-cols-12">
        <div
          data-reveal
          className="flex flex-col justify-between border border-sage-dim p-8 md:col-span-4"
        >
          <div>
            <HiOutlineLocationMarker size={26} className="text-gold" />
            <p className="mt-4 font-display text-xl text-ivory">
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
            className="mt-8 inline-block border-b border-gold pb-1 text-sm text-gold transition-opacity hover:opacity-80"
          >
            Get Directions
          </a>
        </div>

        <div
          data-reveal
          className="overflow-hidden border border-sage-dim md:col-span-8"
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