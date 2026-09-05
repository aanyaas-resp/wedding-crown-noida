"use client";

import { useReveal } from "@/app/components/hooks/useReveal";

export default function About() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="about" ref={ref} className="container-crown py-28 md:py-36">
      <div className="grid gap-12 md:grid-cols-12 md:items-end">
        <div className="md:col-span-7">
          <p data-reveal className="label-eyebrow mb-5">
            About Wedding Crown
          </p>
          <h2 data-reveal className="font-display text-balance text-4xl leading-tight text-ivory md:text-5xl">
            Where your celebration becomes a memory
          </h2>
        </div>
        <div data-reveal className="md:col-span-5">
          <p className="text-balance leading-relaxed text-ivory-dim">
            Wedding Crown is a premium wedding and banquet destination in
            Noida, designed to bring your dream celebrations to life. With
            elegant interiors, spacious venues, beautiful décor and
            professional hospitality, we create memorable experiences for
            weddings, receptions, engagements, birthdays and corporate
            events.
          </p>
          <a
            href="#halls"
            className="mt-6 inline-block border-b border-gold pb-1 text-sm text-gold transition-opacity hover:opacity-80"
          >
            Explore Wedding Crown
          </a>
        </div>
      </div>

      <div data-reveal className="rule mt-20" />
    </section>
  );
}