"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { HiOutlineX } from "react-icons/hi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from "@/lib/data";
import { useReveal } from "@/app/components/hooks/useReveal";
import { cn } from "@/lib/utils";

// Map each gallery item (by label) to its image file.
// Drop your files in /public/images/gallery/ using these exact names,
// or edit the paths below to match whatever you name them.
const GALLERY_IMAGES: Record<string, string> = {
  "Samrat Hall, dressed for a reception": "/images/samrat.jpg",
  "Mandap florals, evening setup": "/images/samrat2.jpg",
  "Baraat arrival, Royal Hall entrance": "/images/samrat3.jpg",
  "Live counters, banquet dinner": "/images/silver.jpg",
  "Poolside Lawn, evening celebration": "/images/hero_bg.jpg",
  "Stage lighting, Platinum Hall": "/images/platinium.jpg",
  "Silver Hall, daylight setup": "/images/platinium2.jpg",
  "Resort rooms, guest stay": "/images/platinium4.jpg",
  "Swimming pool, daytime view": "/images/royal.jpg",
  "Blossom Garden, outdoor setup": "/images/glasshouse.jpg",
  "Table styling, close detail": "/images/platinium3.jpg",
};

export default function Gallery() {
  const [active, setActive] = useState<(typeof GALLERY_CATEGORIES)[number]>(
    "All"
  );
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const ref = useReveal<HTMLDivElement>();

  const items =
    active === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((i) => i.category === active);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const showPrev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i - 1 + items.length) % items.length));
  }, [items.length]);
  const showNext = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % items.length));
  }, [items.length]);

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
          <button
            key={item.label}
            type="button"
            onClick={() => setLightboxIndex(i)}
            aria-label={`View image: ${item.label}`}
            className={cn(
              "group relative aspect-square overflow-hidden border border-sage-dim text-left sm:aspect-[4/3]",
              i % 5 === 0 && "col-span-2 aspect-[16/10] sm:aspect-[16/8]"
            )}
          >
            <Image
              src={GALLERY_IMAGES[item.label] ?? "/images/gallery/placeholder.jpg"}
              alt={item.label}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 400px"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
          </button>
        ))}
      </div>

      <GalleryLightbox
        items={items}
        images={GALLERY_IMAGES}
        index={lightboxIndex}
        onClose={closeLightbox}
        onPrev={showPrev}
        onNext={showNext}
      />
    </section>
  );
}

interface GalleryLightboxProps {
  items: typeof GALLERY_ITEMS;
  images: Record<string, string>;
  index: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

function GalleryLightbox({ items, images, index, onClose, onPrev, onNext }: GalleryLightboxProps) {
  const [mounted, setMounted] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => setMounted(true), []);

  const open = index !== null;

  // Lock body scroll while open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Keyboard navigation
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose, onPrev, onNext]);

  if (!mounted || !open || index === null) return null;

  const item = items[index];
  const src = images[item.label] ?? "/images/gallery/placeholder.jpg";

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    const SWIPE_THRESHOLD = 50;
    if (delta > SWIPE_THRESHOLD) onPrev();
    else if (delta < -SWIPE_THRESHOLD) onNext();
    touchStartX.current = null;
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95"
      style={{ height: "100dvh", width: "100vw" }}
      role="dialog"
      aria-modal="true"
      aria-label="Gallery image viewer"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Close */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close image viewer"
        className="absolute right-3 top-3 z-[10000] flex h-11 w-11 items-center justify-center rounded-full bg-white text-black shadow-lg transition-transform hover:scale-110 active:scale-95 sm:right-6 sm:top-6 sm:h-12 sm:w-12"
      >
        <HiOutlineX size={24} />
      </button>

      {/* Counter */}
      <p className="absolute left-1/2 top-4 z-[10000] -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 text-xs tracking-wide text-white sm:top-6">
        {index + 1} / {items.length}
      </p>

      {/* Prev */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous image"
        className="absolute left-2 top-1/2 z-[10000] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow-lg transition-transform hover:scale-110 active:scale-95 sm:left-6 sm:h-12 sm:w-12"
      >
        <HiChevronLeft size={26} />
      </button>

      {/* Next */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next image"
        className="absolute right-2 top-1/2 z-[10000] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow-lg transition-transform hover:scale-110 active:scale-95 sm:right-6 sm:h-12 sm:w-12"
      >
        <HiChevronRight size={26} />
      </button>

      {/* Image + caption */}
      <div
        className="relative flex h-full w-full flex-col items-center justify-center gap-4 px-14 py-16 sm:px-20"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="relative h-full w-full max-w-5xl">
          <Image
            key={src}
            src={src}
            alt={item.label}
            fill
            sizes="100vw"
            className="object-contain"
          />
        </div>
        <p className="max-w-lg text-balance text-center text-sm text-white/80">
          {item.label}
        </p>
      </div>
    </div>,
    document.body
  );
}
