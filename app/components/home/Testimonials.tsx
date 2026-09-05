"use client";

import { TESTIMONIALS } from "@/lib/data";
import { useReveal } from "@/app/components/hooks/useReveal";

export default function Testimonials() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="testimonials" ref={ref} className="bg-ink-2 py-28 md:py-36">
      <div className="container-crown">
        <p data-reveal className="label-eyebrow mb-5 text-center">
          Testimonials
        </p>
        <h2 data-reveal className="font-display text-balance mx-auto max-w-xl text-center text-4xl leading-tight text-ivory md:text-5xl">
          Loved by our guests
        </h2>

        <div className="mt-16 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-2 md:overflow-visible">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              data-reveal
              className="w-[85vw] flex-none snap-start border border-sage-dim p-8 md:w-auto"
            >
              <blockquote className="text-balance font-display text-xl leading-relaxed text-ivory">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-sm tracking-wide text-gold">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}