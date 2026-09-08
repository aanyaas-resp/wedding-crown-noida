"use client";

import { EVENTS } from "@/lib/data";
import { HiArrowUpRight } from "react-icons/hi2";
import { useReveal } from "@/app/components/hooks/useReveal";

export default function Events() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="events" ref={ref} className="container-crown py-28 md:py-36">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p data-reveal className="label-eyebrow mb-5">
            Events We Host
          </p>
          <h2
            data-reveal
            className="font-display text-balance max-w-2xl text-4xl leading-tight text-ivory md:text-5xl"
          >
            Celebrations made for every occasion
          </h2>
        </div>

        <p
          data-reveal
          className="hidden max-w-xs text-balance text-sm leading-relaxed text-ivory-dim md:block"
        >
          {EVENTS.length} occasions, one address — tell us what you&apos;re
          planning and we&apos;ll tailor the space to fit.
        </p>
      </div>

      <div className="mt-16 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible lg:grid-cols-6">
        {EVENTS.map((event, i) => (
          <a
            key={event.title}
            href="#contact"
            data-reveal
            className="group relative w-[78vw] flex-none snap-start overflow-hidden border border-sage-dim bg-ink-2/40 p-6 transition-colors duration-300 hover:border-gold/60 focus-visible:border-gold/60 sm:w-[45vw] md:w-auto"
          >
            {/* Top accent line — animates in on hover/focus */}
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px w-0 bg-gold transition-all duration-500 ease-out group-hover:w-full group-focus-visible:w-full"
            />

            <span className="font-display text-3xl text-gold/30 transition-colors duration-300 group-hover:text-gold/60 group-focus-visible:text-gold/60">
              {String(i + 1).padStart(2, "0")}
            </span>

            <h3 className="mt-5 font-display text-xl text-ivory">{event.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ivory-dim">
              {event.copy}
            </p>

            <span className="mt-5 inline-flex items-center gap-1.5 text-xs tracking-wide text-gold opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100">
              Enquire
              <HiArrowUpRight
                size={13}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}