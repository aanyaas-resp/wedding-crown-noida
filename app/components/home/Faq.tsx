"use client";

import { useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import { FAQS } from "@/lib/data";
import { useReveal } from "@/app/components/hooks/useReveal";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="faq" ref={ref} className="relative overflow-hidden bg-ink-2 py-28 md:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[26rem] w-[50rem] -translate-x-1/2 rounded-full bg-gold/5 blur-3xl"
      />

      <div className="container-crown relative max-w-3xl">
        <p data-reveal className="label-eyebrow mb-5 text-center">
          Frequently Asked Questions
        </p>
        <h2
          data-reveal
          className="font-display mb-6 text-balance text-center text-4xl leading-tight text-ivory md:text-5xl"
        >
          Good to know before you book
        </h2>
        <div data-reveal className="rule mx-auto mb-14 max-w-xs" />

        <div
          data-reveal
          className="overflow-hidden rounded-2xl border border-sage-dim bg-ink"
        >
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.q}
                className={cn(
                  i !== 0 && "border-t border-sage-dim"
                )}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left transition-colors duration-300 hover:bg-gold/5 sm:px-8"
                  aria-expanded={isOpen}
                >
                  <span
                    className={cn(
                      "font-display text-lg transition-colors duration-300",
                      isOpen ? "text-gold" : "text-ivory"
                    )}
                  >
                    {item.q}
                  </span>
                  <span
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-400 ease-crown",
                      isOpen
                        ? "rotate-45 border-gold bg-gold/10"
                        : "border-sage-dim"
                    )}
                  >
                    <HiOutlinePlus className="text-gold" size={16} />
                  </span>
                </button>

                {/* grid-rows 0fr -> 1fr trick: animates height without
                    knowing content height in advance, works with
                    overflow-hidden and no JS measurement */}
                <div
                  className="grid transition-[grid-template-rows] duration-400 ease-crown"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p
                      className={cn(
                        "max-w-xl px-6 pb-6 text-sm leading-relaxed text-ivory-dim transition-opacity duration-300 sm:px-8",
                        isOpen ? "opacity-100 delay-100" : "opacity-0"
                      )}
                    >
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}