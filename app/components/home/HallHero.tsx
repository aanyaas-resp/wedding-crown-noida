"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import ContactModal from "../Contactmodal";
import type { Hall } from "@/lib/halls";

gsap.registerPlugin(ScrollTrigger);

interface HallHeroProps {
  hall: Hall;
  /** Only pass true for a hall section rendered above the fold on first paint. */
  priority?: boolean;
}

export default function HallHero({ hall, priority = false }: HallHeroProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const bgWrapRef = useRef<HTMLDivElement | null>(null);
  const bgImgRef = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const letters = hall.name.split("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set the "from" states here, in JS, instead of baking opacity-0 /
      // translated positions into the JSX/CSS. That way, if this effect
      // never runs (script error, JS disabled, slow hydration), every
      // element is already visible in its resting position rather than
      // permanently hidden.
      gsap.set(
        [
          "[data-hall-tag]",
          "[data-hall-letter]",
          "[data-hall-copy]",
          "[data-hall-cta]",
          "[data-hall-scroll]",
        ],
        { clearProps: "all" }
      );

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        bgImgRef.current,
        { opacity: 0, scale: 1.18 },
        { opacity: 1, scale: 1.05, duration: 2.2, ease: "power2.out" }
      )
        .fromTo(
          "[data-hall-tag]",
          { opacity: 0, y: 16, filter: "blur(6px)", letterSpacing: "0.5em" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            letterSpacing: "0.18em",
            duration: 1,
          },
          "-=1.5"
        )
        .fromTo(
          "[data-hall-letter]",
          { opacity: 0, y: "70%", rotateX: 40 },
          {
            opacity: 1,
            y: "0%",
            rotateX: 0,
            duration: 0.9,
            stagger: 0.035,
          },
          "-=0.55"
        )
        .fromTo(
          "[data-hall-copy]",
          { opacity: 0, y: 18, filter: "blur(4px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.85, stagger: 0.14 },
          "-=0.4"
        )
        .fromTo(
          "[data-hall-cta]",
          { opacity: 0, y: 20, scale: 0.94 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7 },
          "-=0.35"
        )
        .fromTo(
          "[data-hall-scroll]",
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          "-=0.2"
        );

      // ---- Continuous soft zoom (Ken Burns) — same on mobile & desktop ----
      gsap.to(bgImgRef.current, {
        scale: 1.16,
        duration: 14,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 2.2,
      });

      // ---- Scroll-linked parallax + fade (scroll, not pointer — fine on touch) ----
      gsap.to(bgWrapRef.current, {
        yPercent: 18,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to("[data-hall-content]", {
        yPercent: -14,
        opacity: 0.2,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const handleBtnTap = () => {
    gsap.fromTo(
      btnRef.current,
      { scale: 0.94 },
      { scale: 1, duration: 0.45, ease: "elastic.out(1, 0.5)" }
    );
    setModalOpen(true);
  };

  return (
    <section
      ref={rootRef}
      id={hall.slug}
      aria-label={`${hall.name} — Wedding Crown`}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-20"
    >
      <div ref={bgWrapRef} className="absolute inset-0 -z-30 will-change-transform">
        <div ref={bgImgRef} className="absolute inset-0 will-change-transform">
          <Image
            src={hall.bgImage}
            alt={hall.bgAlt}
            fill
            priority={priority}
            loading={priority ? undefined : "lazy"}
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </div>

      {/* Lighter scrim */}
      <div className="absolute inset-0 -z-20 bg-black/12" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[120vmax] w-[120vmax] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(closest-side, rgba(201,161,90,0.16), transparent 60%)",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(130% 95% at 50% 48%, transparent 38%, rgba(10,12,9,0.32) 78%, rgba(10,12,9,0.6) 100%)",
        }}
      />

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[60vh] opacity-90"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(10,12,9,0.4) 55%, rgba(10,12,9,0.68) 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[30vh] opacity-70"
        style={{
          background: "linear-gradient(0deg, transparent 0%, rgba(10,12,9,0.3) 100%)",
        }}
      />

      <div className="pointer-events-none absolute inset-0 -z-10 grain-overlay grain-animated" />

      <div
        data-hall-content
        className="container-crown relative z-10 mx-auto max-w-3xl text-center will-change-transform"
      >
        <p
          data-hall-tag
          className="hero-white label-eyebrow mb-6"
          style={{ letterSpacing: "0.18em" }}
        >
          {hall.tag}
        </p>

        {/*
          The heading is split into one <span> per letter so GSAP can
          stagger-animate each character. That breaks screen readers,
          which either read every letter individually or skip the
          fragments — so the visible, animated letters are hidden from
          assistive tech, and the full hall name is exposed once via a
          visually-hidden node instead.
        */}
        <h1
          className="hero-text font-display text-balance text-[13vw] leading-[0.98] sm:text-6xl md:text-7xl"
          style={{ perspective: "600px" }}
        >
          <span className="sr-only">{hall.name}</span>
          <span aria-hidden="true">
            {letters.map((ch, i) => (
              <span
                key={i}
                data-hall-letter
                className="inline-block will-change-transform"
              >
                {ch === " " ? "\u00A0" : ch}
              </span>
            ))}
          </span>
        </h1>

        <p data-hall-copy className="hero-text-dim mx-auto mt-6 max-w-xl text-balance">
          {hall.copy}
        </p>

        <p data-hall-copy className="hero-text-dim mt-3 text-sm tracking-wide opacity-90">
          Seating capacity: <span className="text-gold">{hall.capacity}</span>
        </p>

        <div className="mt-10 flex justify-center">
          <button
            ref={btnRef}
            type="button"
            data-hall-cta
            onClick={handleBtnTap}
            className="btn-liquid relative transition-transform duration-300 hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold active:scale-95"
          >
            <span className="btn-liquid-glow" aria-hidden="true" />
            <span className="relative z-10">Book This Hall</span>
          </button>
        </div>
      </div>

      <div
        data-hall-scroll
        className="pointer-events-none absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="scroll-cue" />
      </div>

      <ContactModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultHall={hall.name}
      />
    </section>
  );
}