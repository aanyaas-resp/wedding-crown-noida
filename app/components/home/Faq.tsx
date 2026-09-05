"use client";

import { useState } from "react";
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi";
import { FAQS } from "@/lib/data";
import { useReveal } from "@/app/components/hooks/useReveal";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="faq" ref={ref} className="bg-ink-2 py-28 md:py-36">
      <div className="container-crown max-w-3xl">
        <p data-reveal className="label-eyebrow mb-5 text-center">
          Frequently Asked Questions
        </p>
        <h2 data-reveal className="font-display mb-14 text-balance text-center text-4xl leading-tight text-ivory md:text-5xl">
          Good to know before you book
        </h2>

        <div className="border-t border-sage-dim">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q} data-reveal className="border-b border-sage-dim">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg text-ivory">
                    {item.q}
                  </span>
                  {isOpen ? (
                    <HiOutlineMinus className="shrink-0 text-gold" size={20} />
                  ) : (
                    <HiOutlinePlus className="shrink-0 text-gold" size={20} />
                  )}
                </button>
                {isOpen && (
                  <p className="max-w-xl pb-6 text-sm leading-relaxed text-ivory-dim">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}