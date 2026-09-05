"use client";

import {
  PiCrownDuotone,
  PiFlowerLotusDuotone,
  PiBuildingsDuotone,
  PiHandHeartDuotone,
  PiCookingPotDuotone,
  PiUsersThreeDuotone,
  PiCarDuotone,
  PiTreeDuotone,
} from "react-icons/pi";
import { WHY_US } from "@/lib/data";
import { useReveal } from "@/app/components/hooks/useReveal";

const ICONS = [
  PiCrownDuotone,
  PiFlowerLotusDuotone,
  PiBuildingsDuotone,
  PiHandHeartDuotone,
  PiCookingPotDuotone,
  PiUsersThreeDuotone,
  PiCarDuotone,
  PiTreeDuotone,
];

export default function WhyChooseUs() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section ref={ref} className="bg-ink-2 py-28 md:py-36">
      <div className="container-crown">
        <p data-reveal className="label-eyebrow mb-5">
          Why Wedding Crown
        </p>
        <h2 data-reveal className="font-display text-balance max-w-2xl text-4xl leading-tight text-ivory md:text-5xl">
          Everything you need for a perfect celebration
        </h2>

        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden border border-sage-dim bg-sage-dim/40 sm:grid-cols-4">
          {WHY_US.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <div
                key={item}
                data-reveal
                className="flex flex-col gap-4 bg-ink-2 p-7 transition-colors duration-300 hover:bg-ink"
              >
                <Icon size={28} className="text-gold" />
                <span className="text-sm leading-snug text-ivory-dim">
                  {item}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}