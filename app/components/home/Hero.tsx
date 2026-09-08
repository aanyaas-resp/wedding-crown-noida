"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { HiOutlinePhone, HiOutlineChevronDown, HiArrowRight } from "react-icons/hi";
import { SITE } from "@/lib/data";
import ContactModal from "../Contactmodal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HERO_WORDS = [
  { text: "One Destination.", gold: false },
  { text: "Endless", gold: false },
  { text: "Celebrations.", gold: true },
];

export default function Hero() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const bgImgRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const primaryBtnRef = useRef<HTMLButtonElement | null>(null);
  const secondaryBtnRef = useRef<HTMLAnchorElement | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  // ---- Entrance + ambient + parallax timeline ----
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        reduceMotion: "(prefers-reduced-motion: reduce)",
        fullMotion: "(prefers-reduced-motion: no-preference)",
      },
      (context) => {
        const { reduceMotion } = context.conditions as { reduceMotion: boolean };

        const ctx = gsap.context(() => {
          if (reduceMotion) {
            gsap.set(
              [
                "[data-hero-arch]",
                bgImgRef.current,
                "[data-hero-badge]",
                "[data-hero-letter]",
                "[data-hero-sub]",
                "[data-hero-cta]",
                "[data-hero-sparkle]",
                "[data-hero-scroll]",
              ],
              { clearProps: "all", opacity: 1 }
            );
            return;
          }

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
              "[data-hero-badge]",
              { opacity: 0, y: 10, scale: 0.9 },
              { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "back.out(1.6)" },
              "-=0.9"
            )
            .fromTo(
              "[data-hero-letter]",
              { opacity: 0, y: "60%", rotateX: -40 },
              {
                opacity: 1,
                y: "0%",
                rotateX: 0,
                duration: 0.65,
                stagger: 0.018,
                ease: "expo.out",
              },
              "-=0.3"
            )
            .fromTo(
              "[data-hero-sub]",
              { opacity: 0, y: 18, filter: "blur(4px)" },
              { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8 },
              "-=0.4"
            )
            .fromTo(
              "[data-hero-cta]",
              { opacity: 0, y: 16 },
              { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 },
              "-=0.45"
            )
            .fromTo(
              "[data-hero-scroll]",
              { opacity: 0, y: -8 },
              { opacity: 1, y: 0, duration: 0.6 },
              "-=0.2"
            )
            .fromTo(
              "[data-hero-sparkle]",
              { opacity: 0, scale: 0.4 },
              { opacity: 1, scale: 1, duration: 0.8, stagger: 0.12 },
              "-=0.6"
            );

          // Continuous soft zoom on the background photo
          gsap.to(bgImgRef.current, {
            scale: 1.12,
            duration: 16,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            delay: 1.8,
          });

          // Ambient sparkle float
          gsap.utils.toArray<HTMLElement>("[data-hero-sparkle]").forEach((el, i) => {
            gsap.to(el, {
              y: i % 2 === 0 ? -14 : 14,
              opacity: 0.35,
              duration: 3 + i * 0.6,
              ease: "sine.inOut",
              yoyo: true,
              repeat: -1,
              delay: i * 0.4,
            });
          });

          // Scroll parallax
          gsap.to(bgImgRef.current, {
            yPercent: 12,
            ease: "none",
            scrollTrigger: {
              trigger: rootRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 0.6,
            },
          });

          gsap.to(contentRef.current, {
            opacity: 0,
            y: -40,
            ease: "none",
            scrollTrigger: {
              trigger: rootRef.current,
              start: "top top",
              end: "70% top",
              scrub: 0.6,
            },
          });
        }, rootRef);

        return () => ctx.revert();
      }
    );

    return () => mm.revert();
  }, []);

  // ---- Magnetic hover on the CTA pair ----
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(hover: none)").matches) return; // skip on touch

    const buttons = [primaryBtnRef.current, secondaryBtnRef.current].filter(
      Boolean
    ) as HTMLElement[];
    const cleanups: Array<() => void> = [];

    buttons.forEach((btn) => {
      const xTo = gsap.quickTo(btn, "x", { duration: 0.5, ease: "power3.out" });
      const yTo = gsap.quickTo(btn, "y", { duration: 0.5, ease: "power3.out" });

      const handleMove = (e: PointerEvent) => {
        const rect = btn.getBoundingClientRect();
        xTo((e.clientX - rect.left - rect.width / 2) * 0.25);
        yTo((e.clientY - rect.top - rect.height / 2) * 0.35);
      };
      const handleLeave = () => {
        xTo(0);
        yTo(0);
      };

      btn.addEventListener("pointermove", handleMove);
      btn.addEventListener("pointerleave", handleLeave);
      cleanups.push(() => {
        btn.removeEventListener("pointermove", handleMove);
        btn.removeEventListener("pointerleave", handleLeave);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  const scrollToNext = () => {
    rootRef.current?.nextElementSibling?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={rootRef}
      aria-label="Wedding Crown banquet hall — introduction"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 -z-20 overflow-hidden">
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

      <div className="absolute inset-0 -z-10 bg-black/22" />

      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 55% at 50% 42%, rgba(8,9,7,0.55) 0%, rgba(8,9,7,0.28) 45%, transparent 75%)",
        }}
      />

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[60vh] opacity-90"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(10,12,9,0.4) 50%, rgba(10,12,9,0.72) 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34vh] opacity-80"
        style={{
          background: "linear-gradient(0deg, transparent 0%, rgba(10,12,9,0.35) 100%)",
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

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-[5] hidden sm:block">
        <span data-hero-sparkle className="absolute left-[18%] top-[28%] h-1.5 w-1.5 rounded-full bg-gold/70 shadow-[0_0_12px_2px_rgba(201,161,90,0.6)]" />
        <span data-hero-sparkle className="absolute right-[20%] top-[36%] h-1 w-1 rounded-full bg-gold/60 shadow-[0_0_10px_2px_rgba(201,161,90,0.5)]" />
        <span data-hero-sparkle className="absolute left-[28%] bottom-[30%] h-1 w-1 rounded-full bg-gold/50 shadow-[0_0_8px_2px_rgba(201,161,90,0.4)]" />
        <span data-hero-sparkle className="absolute right-[26%] bottom-[24%] h-1.5 w-1.5 rounded-full bg-gold/70 shadow-[0_0_12px_2px_rgba(201,161,90,0.6)]" />
      </div>

      <div ref={contentRef} className="container-crown relative z-10 text-center">
        {/* Self-contained glass pill — legible on its own, independent of image brightness */}
        <div data-hero-badge className="mb-7 flex justify-center">
          <span className="pill-badge">
            <span className="pill-badge-dot" aria-hidden="true" />
            <span className="label-eyebrow text-[0.7rem] text-[#FFFFFE]">
              {SITE.tagline}
            </span>
          </span>
        </div>

        <h1
          className="hero-text font-display text-balance text-[13vw] leading-[0.98] sm:text-6xl md:text-7xl lg:text-8xl"
          style={{ perspective: "600px" }}
        >
          {HERO_WORDS.map((word, wi) => (
            <span key={wi} className={`inline-block ${word.gold ? "text-gold" : ""}`}>
              {word.text.split("").map((ch, ci) => (
                <span key={ci} data-hero-letter className="inline-block will-change-transform">
                  {ch === " " ? "\u00A0" : ch}
                </span>
              ))}
              {wi < HERO_WORDS.length - 1 && "\u00A0"}
            </span>
          ))}
        </h1>

        <p data-hero-sub className="hero-text-dim mx-auto mt-7 max-w-xl text-balance">
          From intimate gatherings to grand weddings of up to 2,000 guests,
          Wedding Crown brings together elegant banquet halls, beautiful
          outdoor venues, resort rooms, a swimming pool and ample parking —
          all at one centrally located destination in Noida.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <button
            type="button"
            ref={primaryBtnRef}
            data-hero-cta
            onClick={() => setModalOpen(true)}
            className="btn-premium w-full sm:w-auto"
          >
            <span>Book a Visit</span>
            <HiArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </button>

          <a
            ref={secondaryBtnRef}
            data-hero-cta
            href={SITE.phone1Href}
            aria-label="Call Wedding Crown now"
            className="btn-glass-pill w-full sm:w-auto"
          >
            <HiOutlinePhone size={18} aria-hidden="true" />
            Call Now
          </a>
        </div>
      </div>

      <div className="hero-text-dim absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-xs tracking-[0.2em]">
        Sector 73, Noida
      </div>

      <button
        type="button"
        data-hero-scroll
        onClick={scrollToNext}
        aria-label="Scroll to explore"
        className="hero-text-dim group absolute bottom-8 right-6 z-10 hidden flex-col items-center gap-2 sm:flex md:right-10"
      >
        <span className="scroll-cue" aria-hidden="true" />
        <HiOutlineChevronDown
          size={16}
          className="animate-bounce opacity-70 transition-opacity group-hover:opacity-100"
          aria-hidden="true"
        />
      </button>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}