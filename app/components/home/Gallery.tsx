"use client";

import { useState } from "react";
import Image from "next/image";
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from "@/lib/data";
import { useReveal } from "@/app/components/hooks/useReveal";
import { cn } from "@/lib/utils";

// Map each gallery item (by label) to its image file.
// Drop your files in /public/images/gallery/ using these exact names,
// or edit the paths below to match whatever you name them.
const GALLERY_IMAGES: Record<string, string> = {
  "Samraat Hall, dressed for a reception": "/images/samrat.jpg",
  "Mandap florals, evening setup": "/images/samrat2.jpg",
  "Baraat arrival, Royal Hall entrance": "/images/samrat3.jpg",
  "Live counters, banquet dinner": "/images/silver.png",
  "Corporate conference, Glass House": "/images/glasshouse.jpg",
  "Stage lighting, Platinum Hall": "/images/platinium.jpg",
  "Silver Hall, daylight setup": "/images/platinium2.jpg",
  "Table styling, close detail": "/images/platinium3.jpg",
  // "Table , close detail": "/images/platinium4.jpg",
  // "Table styling,  detail": "/images/platinium4.jpg",
  // "Table ,  detail": "/images/royal.jpg",
};

export default function Gallery() {
  const [active, setActive] = useState<(typeof GALLERY_CATEGORIES)[number]>(
    "All"
  );
  const ref = useReveal<HTMLDivElement>();

  const items =
    active === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((i) => i.category === active);

  return (
    <section id="gallery" ref={ref} className="container-crown py-20 sm:py-28 md:py-36">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p data-reveal className="label-eyebrow mb-5">
            Gallery
          </p>
          <h2 data-reveal className="font-display text-balance text-3xl leading-tight text-ivory sm:text-4xl md:text-5xl">
            A glimpse into Wedding Crown
          </h2>
        </div>

        <div data-reveal className="flex flex-wrap gap-2">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                "px-4 py-2 text-xs tracking-wide transition-colors duration-300",
                active === cat
                  ? "bg-gold text-ink"
                  : "border border-sage-dim text-ivory-dim hover:border-gold hover:text-gold"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-2.5 sm:mt-14 sm:gap-4 md:grid-cols-3">
        {items.map((item, i) => (
          <div
            key={item.label}
            className={cn(
              "relative aspect-square overflow-hidden border border-sage-dim sm:aspect-[4/3]",
              i % 5 === 0 && "col-span-2 aspect-[16/10] sm:aspect-[16/8]"
            )}
          >
            <Image
              src={GALLERY_IMAGES[item.label] ?? "/images/gallery/placeholder.jpg"}
              alt={item.label}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 400px"
              className="object-cover transition-transform duration-700 ease-out hover:scale-105"
            />
          </div>
        ))}
      </div>

   
    </section>
  );
}