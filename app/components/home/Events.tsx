"use client";

import { EVENTS } from "@/lib/data";
import { useReveal } from "@/app/components/hooks/useReveal";

export default function Events() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="events" ref={ref} className="container-crown py-28 md:py-36">
      <p data-reveal className="label-eyebrow mb-5">
        Events We Host
      </p>
      <h2 data-reveal className="font-display text-balance max-w-2xl text-4xl leading-tight text-ivory md:text-5xl">
        Celebrations made for every occasion
      </h2>

      <div className="mt-16 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-5 md:overflow-visible">
        {EVENTS.map((event) => (
          <div
            key={event.title}
            data-reveal
            className="w-[78vw] flex-none snap-start border-t border-gold/50 pt-6 sm:w-[45vw] md:w-auto"
          >
            <h3 className="font-display text-xl text-ivory">{event.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ivory-dim">
              {event.copy}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}