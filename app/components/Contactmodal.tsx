"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { HiOutlineX } from "react-icons/hi";
import { SITE } from "@/lib/data";
import { HALLS } from "@/lib/halls";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
  defaultHall?: string; // pass this from any hall page to auto-fill
}

export default function ContactModal({ open, onClose, defaultHall }: ContactModalProps) {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const firstFieldRef = useRef<HTMLInputElement | null>(null);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [hall, setHall] = useState(defaultHall ?? "");
  const [eventDate, setEventDate] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);

  // Open/close animation
  useEffect(() => {
    if (!overlayRef.current || !panelRef.current) return;

    if (open) {
      setHall(defaultHall ?? "");
      gsap.set(overlayRef.current, { display: "flex" });
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.25 }
      );
      gsap.fromTo(
        panelRef.current,
        { opacity: 0, y: 24, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: "power3.out" }
      );
      document.body.style.overflow = "hidden";
      const focusTimer = setTimeout(() => firstFieldRef.current?.focus(), 300);
      return () => clearTimeout(focusTimer);
    } else {
      document.body.style.overflow = "";
    }
  }, [open, defaultHall]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim()) {
      setError("Please add your name and phone number.");
      return;
    }
    setError(null);

    const lines = [
      `Hello Wedding Crown, I'd like to book a visit.`,
      hall ? `Hall: ${hall}` : null,
      `Name: ${name}`,
      `Phone: ${phone}`,
      eventDate ? `Event date: ${eventDate}` : null,
      message ? `Message: ${message}` : null,
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join("\n"));
    const waUrl = `${SITE.whatsapp}?text=${text}`;

    window.open(waUrl, "_blank", "noopener,noreferrer");

    setName("");
    setPhone("");
    setEventDate("");
    setMessage("");
    onClose();
  };

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 hidden items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      onMouseDown={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      <div
        ref={panelRef}
        className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl border border-gold/20 bg-[#0d120e] p-6 shadow-2xl sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close contact form"
          className="absolute right-4 top-4 text-ivory-dim transition-colors hover:text-gold"
        >
          <HiOutlineX size={22} />
        </button>

        <h2
          id="contact-modal-title"
          className="font-display pr-8 text-2xl text-ivory sm:text-3xl"
        >
          Book a Visit
        </h2>
        <p className="mt-2 text-sm text-ivory-dim">
          Share a few details and we&apos;ll continue on WhatsApp.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
          <div>
            <label htmlFor="cm-name" className="mb-1 block text-sm text-ivory-dim">
              Name
            </label>
            <input
              ref={firstFieldRef}
              id="cm-name"
              name="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              placeholder="Your full name"
              className="w-full rounded-lg border border-ivory/15 bg-transparent px-3 py-2.5 text-ivory outline-none focus:border-gold"
            />
          </div>

          <div>
            <label htmlFor="cm-phone" className="mb-1 block text-sm text-ivory-dim">
              Phone number
            </label>
            <input
              id="cm-phone"
              name="phone"
              type="tel"
              required
              inputMode="tel"
              autoComplete="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="10-digit mobile number"
              className="w-full rounded-lg border border-ivory/15 bg-transparent px-3 py-2.5 text-ivory outline-none focus:border-gold"
            />
          </div>

          <div>
            <label htmlFor="cm-hall" className="mb-1 block text-sm text-ivory-dim">
              Hall
            </label>
            <select
              id="cm-hall"
              name="hall"
              value={hall}
              onChange={(e) => setHall(e.target.value)}
              className="w-full rounded-lg border border-ivory/15 bg-[#0d120e] px-3 py-2.5 text-ivory outline-none focus:border-gold"
            >
              <option value="">Select a hall</option>
              {HALLS.map((h) => (
                <option key={h.slug} value={h.name}>
                  {h.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="cm-date" className="mb-1 block text-sm text-ivory-dim">
              Event date (optional)
            </label>
            <input
              id="cm-date"
              name="eventDate"
              type="date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              className="w-full rounded-lg border border-ivory/15 bg-transparent px-3 py-2.5 text-ivory outline-none focus:border-gold [color-scheme:dark]"
            />
          </div>

          <div>
            <label htmlFor="cm-message" className="mb-1 block text-sm text-ivory-dim">
              Message (optional)
            </label>
            <textarea
              id="cm-message"
              name="message"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Guest count, hall preference, budget..."
              className="w-full resize-none rounded-lg border border-ivory/15 bg-transparent px-3 py-2.5 text-ivory outline-none focus:border-gold"
            />
          </div>

          {error && (
            <p role="alert" className="text-sm text-red-400">
              {error}
            </p>
          )}

          <button type="submit" className="btn-gold w-full">
            Continue on WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}