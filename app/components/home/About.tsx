"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";
import { useReveal } from "@/app/components/hooks/useReveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// TODO: confirm these against real figures before shipping
const STATS = [
  { value: 2000, suffix: "+", label: "Guest Capacity" },
  { value: 15, suffix: "+", label: "Years of Legacy" },
  { value: 500, suffix: "+", label: "Celebrations Hosted" },
];

function useCountUp(targets: number[]) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const els = containerRef.current?.querySelectorAll<HTMLElement>("[data-stat-value]");
    if (!els || els.length === 0) return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        reduceMotion: "(prefers-reduced-motion: reduce)",
        fullMotion: "(prefers-reduced-motion: no-preference)",
      },
      (context) => {
        const { reduceMotion } = context.conditions as { reduceMotion: boolean };

        if (reduceMotion) {
          els.forEach((el, i) => {
            el.textContent = `${targets[i]}`;
          });
          return;
        }

        const ctx = gsap.context(() => {
          els.forEach((el, i) => {
            const target = targets[i];
            const counter = { val: 0 };
            gsap.to(counter, {
              val: target,
              duration: 1.6,
              ease: "power2.out",
              onUpdate: () => {
                el.textContent = `${Math.round(counter.val)}`;
              },
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                once: true,
              },
            });
          });
        }, containerRef);

        return () => ctx.revert();
      }
    );

    return () => mm.revert();
  }, [targets]);

  return containerRef;
}

export default function About() {
  const revealRef = useReveal<HTMLDivElement>();
  const statsRef = useCountUp(STATS.map((s) => s.value));

  return (
    <section id="about" ref={revealRef} className="container-crown py-28 md:py-36">
      <div className="grid gap-14 md:grid-cols-12 md:items-center md:gap-16">
        {/* Image column */}
        <div data-reveal className="relative md:col-span-5">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
            <Image
              src="/images/weddingcrown.jpg" // TODO: swap for a real venue photo
              alt="Elegant banquet hall interior at Wedding Crown with floral décor and ambient lighting"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute -bottom-5 -right-5 -z-10 hidden h-full w-full rounded-sm border border-gold/50 sm:block"
          />
        </div>

        {/* Content column */}
        <div className="md:col-span-7">
          <p data-reveal className="label-eyebrow mb-5">
            About Wedding Crown
          </p>

          <h2
            data-reveal
            className="font-display text-balance text-4xl leading-[1.08] text-ivory md:text-5xl"
          >
            Where your celebration becomes a memory
          </h2>

          <p
            data-reveal
            className="mt-6 max-w-xl text-balance leading-relaxed text-ivory-dim first-letter:float-left first-letter:mr-2 first-letter:font-display first-letter:text-6xl first-letter:leading-[0.75] first-letter:text-gold md:first-letter:text-7xl"
          >
            Wedding Crown is a premium wedding and banquet destination in
            Noida, designed to bring your dream celebrations to life. With
            elegant interiors, spacious venues, beautiful décor and
            professional hospitality, we create memorable experiences for
            weddings, receptions, engagements, birthdays and corporate
            events.
          </p>

          <div
            ref={statsRef}
            data-reveal
            className="mt-10 grid grid-cols-3 divide-x divide-sage-dim border-t border-sage-dim pt-8"
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="px-5 first:pl-0 last:pr-0">
                <div className="font-display text-3xl text-gold md:text-4xl">
                  <span data-stat-value>0</span>
                  {stat.suffix}
                </div>
                <div className="mt-1 text-xs leading-snug text-ivory-dim">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <a
            href="#halls"
            className="group mt-10 inline-flex items-center gap-2 border-b border-gold pb-1 text-sm text-gold transition-opacity hover:opacity-80"
          >
            Explore Wedding Crown
            <HiArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>

      <div data-reveal className="rule mt-20" />
    </section>
  );
}