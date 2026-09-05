"use client";

import { HALLS } from "@/lib/halls";
import { useReveal } from "@/app/components/hooks/useReveal";
import { cn } from "@/lib/utils";

export default function Halls() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="halls" ref={ref} className="py-28 md:py-36">
      <div className="container-crown mb-16 md:mb-20">
        <p data-reveal className="label-eyebrow mb-5">
          Halls &amp; Venues
        </p>
        <h2 data-reveal className="font-display text-balance text-4xl leading-tight text-ivory md:text-5xl">
          Find the perfect space for your celebration
        </h2>
      </div>

      <div>
        {HALLS.map((hall, i) => (
          <div
            key={hall.name}
            data-reveal
            className="container-crown grid gap-6 border-t border-sage-dim py-12 md:grid-cols-12 md:items-center md:gap-10 md:py-16"
          >
            <div className="md:col-span-1">
              <span className="font-display text-lg text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>

            <div
              className={cn(
                "md:col-span-4",
                i % 2 === 1 && "md:order-3"
              )}
            >
              <div
                aria-hidden
                className="flex aspect-[4/3] items-center justify-center border border-sage-dim bg-sage-dim/10"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 30% 20%, rgba(201,161,90,0.14), transparent 55%)",
                }}
              >
                <span className="font-display text-2xl text-gold/70">
                  {hall.name}
                </span>
              </div>
            </div>

            <div className="md:col-span-6">
              <h3 className="font-display text-2xl text-ivory md:text-3xl">
                {hall.name}
              </h3>
              <p className="mt-1 text-sm text-gold">{hall.tag}</p>
              <p className="mt-4 max-w-md text-balance leading-relaxed text-ivory-dim">
                {hall.copy}
              </p>
              <p className="mt-3 text-xs tracking-wide text-ivory-dim/70">
                Capacity: {hall.capacity}
              </p>
              <a
                href="#contact"
                className="mt-5 inline-block border-b border-gold pb-1 text-sm text-gold transition-opacity hover:opacity-80"
              >
                View {hall.name}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
