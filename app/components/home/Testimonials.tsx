"use client";

import { HiOutlineChatAlt2 } from "react-icons/hi";
import { TESTIMONIALS } from "@/lib/data";
import { useReveal } from "@/app/components/hooks/useReveal";

export default function Testimonials() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative overflow-hidden bg-ink-2 py-28 md:py-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[30rem] w-[60rem] -translate-x-1/2 rounded-full bg-gold/5 blur-3xl"
      />

      <div className="container-crown relative">
        <p data-reveal className="label-eyebrow mb-5 text-center">
          Testimonials
        </p>
        <h2
          data-reveal
          className="font-display text-balance mx-auto max-w-xl text-center text-4xl leading-tight text-ivory md:text-5xl"
        >
          Loved by our guests
        </h2>
        <div data-reveal className="rule mx-auto mt-8 max-w-xs" />

        <div className="mt-16 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-2 md:overflow-visible">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              data-reveal
              className="group relative w-[85vw] flex-none snap-start overflow-hidden rounded-2xl border border-sage-dim bg-ink p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_20px_50px_-25px_rgba(184,147,90,0.4)] md:w-auto"
            >
              <HiOutlineChatAlt2
                className="absolute right-6 top-6 text-gold/15 transition-colors duration-500 group-hover:text-gold/25"
                size={48}
              />
              <blockquote className="relative text-balance font-display text-xl leading-relaxed text-ivory">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-gold/10 font-display text-sm text-gold">
                  {t.name.charAt(0)}
                </span>
                <figcaption className="text-sm tracking-wide text-gold">
                  {t.name}
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}