"use client";

import Image from "next/image";
import { PiCheckCircleDuotone } from "react-icons/pi";
import { HiArrowUpRight } from "react-icons/hi2";
import { RESORT_STATS, RESORT_FEATURES } from "@/lib/data";
import { useReveal } from "@/app/components/hooks/useReveal";

const CAPTIONS: Record<string, string> = {
  "/images/hero_bg.jpg": "Swimming Pool",
  "/images/platinium.jpg": "Resort Room",
  "/images/royal.jpg": "Poolside Lawn",
};

function CollageImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className: string;
}) {
  return (
    <div
      className={`group relative overflow-hidden border border-sage-dim ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.06] motion-reduce:transition-none"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:transition-none"
      />
      <span className="absolute bottom-3 left-3 text-xs uppercase tracking-[0.12em] text-hero-text opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:transition-none">
        {CAPTIONS[src]}
      </span>
    </div>
  );
}

export default function ResortStay() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="resort" ref={ref} className="bg-ink-2 py-28 md:py-36">
      <div className="container-crown grid gap-14 md:grid-cols-12 md:items-center md:gap-10">
        {/* Image side */}
        <div data-reveal className="md:col-span-6">
          <div className="relative grid grid-cols-2 gap-3 sm:gap-4">
            <CollageImage
              src="/images/hero_bg.jpg"
              alt="Swimming pool and poolside lawn at Wedding Crown, Sector 73, Noida"
              className="col-span-2 aspect-[16/10] sm:aspect-[16/9]"
            />
            <CollageImage
              src="/images/platinium.jpg"
              alt="Resort room interior at Wedding Crown, Sector 73, Noida"
              className="aspect-square"
            />
            <CollageImage
              src="/images/royal.jpg"
              alt="Poolside Lawn evening setup at Wedding Crown, Sector 73, Noida"
              className="aspect-square"
            />
          </div>
        </div>

        {/* Copy side */}
        <div className="md:col-span-6">
          <p data-reveal className="label-eyebrow mb-5">
            Resort Stay &amp; Swimming Pool
          </p>
          <h2
            data-reveal
            className="font-display text-balance text-4xl leading-tight text-ivory md:text-5xl"
          >
            Celebrate. Stay. Enjoy. All at one destination.
          </h2>
          <p
            data-reveal
            className="mt-6 max-w-lg text-balance leading-relaxed text-ivory-dim"
          >
            Wedding Crown offers more than event halls. Well-furnished resort
            rooms and a swimming pool mean your family and out-of-town guests
            can stay, relax and celebrate without ever leaving the property —
            perfect for multi-day wedding functions and destination-style
            weddings, within Noida.
          </p>

          <ul className="mt-8 flex flex-col gap-2">
            {RESORT_FEATURES.map((feature) => (
              <li
                key={feature}
                data-reveal
                className="group flex items-start gap-3 rounded-sm px-2 py-1.5 text-sm leading-relaxed text-ivory-dim transition-colors duration-200 hover:bg-gold/5"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/10 transition-colors duration-200 group-hover:bg-gold/20">
                  <PiCheckCircleDuotone size={15} className="text-gold" />
                </span>
                <span className="pt-0.5">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden border border-sage-dim bg-sage-dim/40 sm:grid-cols-4">
            {RESORT_STATS.map((stat) => (
              <div
                key={stat.label}
                data-reveal
                className="flex flex-col items-center gap-1 bg-ink-2 px-3 py-6 text-center transition-colors duration-200 hover:bg-ink"
              >
                <span className="font-display text-2xl text-gold">
                  {stat.value}
                </span>
                <span className="text-xs leading-snug text-ivory-dim">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
            <a
          
            href="#contact"
            data-reveal
            className="group mt-8 inline-flex items-center gap-1.5 border-b border-gold pb-1 text-sm text-gold transition-opacity hover:opacity-80"
          >
            Enquire About Resort Stay
            <HiArrowUpRight
              size={13}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  );
}