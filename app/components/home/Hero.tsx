"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import { HiOutlinePhone } from "react-icons/hi";
import { SITE } from "@/lib/data";
import ContactModal from "../Contactmodal";

const HERO_WORDS = [
  { text: "Celebrate", gold: false },
  { text: "your", gold: false },
  { text: "dream wedding", gold: true },
  { text: "with us", gold: false },
];

export default function Hero() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const bgImgRef = useRef<HTMLDivElement | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        "[data-hero-arch]",
        { opacity: 0, scale: 0.94 },
        { opacity: 1, scale: 1, duration: 1.4 }
      )
        .fromTo(
          bgImgRef.current,
          { opacity: 0, scale: 1.12 },
          { opacity: 1, scale: 1, duration: 1.8 },
          0
        )
        .fromTo(
          "[data-hero-eyebrow]",
          { opacity: 0, y: 14, filter: "blur(4px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7 },
          "-=0.9"
        )
        .fromTo(
          "[data-hero-letter]",
          { opacity: 0, y: "60%", rotateX: 35 },
          { opacity: 1, y: "0%", rotateX: 0, duration: 0.8, stagger: 0.02 },
          "-=0.4"
        )
        .fromTo(
          "[data-hero-sub]",
          { opacity: 0, y: 18, filter: "blur(4px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          "[data-hero-cta]",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 },
          "-=0.45"
        );

      // ---- Continuous soft zoom on the background photo — same on all devices ----
      gsap.to(bgImgRef.current, {
        scale: 1.12,
        duration: 16,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1.8,
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={rootRef}
      aria-label="Wedding Crown banquet hall — introduction"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 -z-20">
        <div ref={bgImgRef} className="absolute inset-0 will-change-transform">
          <Image
            src="/images/hero_bg.jpg"
            alt="Wedding Crown banquet hall in Sector 73, Noida, decorated with a floral mandap and crystal chandeliers"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </div>

      {/* Lighter scrim: photo more visible, text-shadow carries contrast */}
      <div className="absolute inset-0 -z-10 bg-black/12" />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[60vh] opacity-90"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(10,12,9,0.35) 50%, rgba(10,12,9,0.65) 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[30vh] opacity-70"
        style={{
          background: "linear-gradient(0deg, transparent 0%, rgba(10,12,9,0.25) 100%)",
        }}
      />

      <div
        data-hero-arch
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[130vmax] w-[130vmax] -translate-x-1/2 -translate-y-1/2"
        style={{
          background: "radial-gradient(closest-side, rgba(201,161,90,0.18), transparent 60%)",
        }}
      />

      <div className="container-crown relative z-10 text-center">
        <p data-hero-eyebrow className="hero-eyebrow-gold label-eyebrow mb-6">
          {SITE.tagline}
        </p>

        <h1
          className="hero-text font-display text-balance text-[13vw] leading-[0.98] sm:text-6xl md:text-7xl lg:text-8xl"
          style={{ perspective: "600px" }}
        >
          {HERO_WORDS.map((word, wi) => (
            <span
              key={wi}
              className={`inline-block ${word.gold ? "text-gold" : ""}`}
            >
              {word.text.split("").map((ch, ci) => (
                <span
                  key={ci}
                  data-hero-letter
                  className="inline-block will-change-transform"
                >
                  {ch === " " ? "\u00A0" : ch}
                </span>
              ))}
              {wi < HERO_WORDS.length - 1 && "\u00A0"}
            </span>
          ))}
        </h1>

        <p data-hero-sub className="hero-text-dim mx-auto mt-7 max-w-xl text-balance">
          From intimate celebrations to grand weddings, Wedding Crown offers
          elegant spaces, beautiful décor and exceptional hospitality for your
          special occasions in Noida.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <button
            type="button"
            data-hero-cta
            onClick={() => setModalOpen(true)}
            className="btn-gold w-full transition-transform duration-300 hover:scale-[1.03] active:scale-95 sm:w-auto"
          >
            Book a Visit
          </button>

          <a
            data-hero-cta
            href={SITE.phone1Href}
            aria-label="Call Wedding Crown now"
            className="hero-text-dim flex w-full items-center justify-center gap-2 text-sm transition-colors hover:text-gold sm:w-auto"
          >
            <HiOutlinePhone size={18} aria-hidden="true" />
            Call Now
          </a>
        </div>
      </div>

      <div className="hero-text-dim absolute bottom-8 left-1/2 -translate-x-1/2 text-xs tracking-[0.2em]">
        Sector 73, Noida
      </div>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}