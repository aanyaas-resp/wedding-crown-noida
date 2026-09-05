"use client";

import { FormEvent, useState } from "react";
import { HiOutlinePhone, HiOutlineCheckCircle } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa6";
import { SITE } from "@/lib/data";
import { useReveal } from "@/app/components/hooks/useReveal";

export default function Contact() {
  const ref = useReveal<HTMLDivElement>();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Connect this to your CRM / email service (e.g. an API route or
    // a form provider) before going live — this UI only manages state.
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden py-28 md:py-36"
    >
      {/* Decorative background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-gold/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-sage/10 blur-3xl"
      />

      <div className="container-crown relative">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <p data-reveal className="label-eyebrow mb-5">
              Book a Visit
            </p>
            <h2
              data-reveal
              className="font-display text-balance text-4xl leading-tight text-ivory md:text-5xl"
            >
              Your dream celebration starts here
            </h2>
            <p
              data-reveal
              className="mt-6 max-w-sm text-balance leading-relaxed text-ivory-dim"
            >
              Tell us about your event and let our team help you create a
              celebration to remember.
            </p>

            <div className="rule my-8" />

            <div data-reveal className="flex flex-col gap-4">
              <a
                href={SITE.phone1Href}
                className="group flex items-center gap-4 text-ivory-dim transition-colors hover:text-gold"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-sage-dim transition-colors duration-300 group-hover:border-gold group-hover:bg-gold/10">
                  <HiOutlinePhone className="text-gold" size={18} />
                </span>
                <span className="text-sm">{SITE.phone1}</span>
              </a>
              <a
                href={SITE.phone2Href}
                className="group flex items-center gap-4 text-ivory-dim transition-colors hover:text-gold"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-sage-dim transition-colors duration-300 group-hover:border-gold group-hover:bg-gold/10">
                  <HiOutlinePhone className="text-gold" size={18} />
                </span>
                <span className="text-sm">{SITE.phone2}</span>
              </a>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 text-ivory-dim transition-colors hover:text-gold"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-sage-dim transition-colors duration-300 group-hover:border-gold group-hover:bg-gold/10">
                  <FaWhatsapp className="text-gold" size={18} />
                </span>
                <span className="text-sm">WhatsApp Us</span>
              </a>
            </div>
          </div>

          <div data-reveal className="md:col-span-7">
            {submitted ? (
              <div className="grain relative flex h-full min-h-[26rem] flex-col items-center justify-center overflow-hidden rounded-2xl border border-gold/30 bg-ink-2 p-10 text-center shadow-[0_0_60px_-20px_rgba(184,147,90,0.35)]">
                <HiOutlineCheckCircle className="text-gold" size={44} />
                <p className="font-display mt-5 text-3xl text-gold">
                  Thank you.
                </p>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-ivory-dim">
                  We&apos;ve received your enquiry. Our team will call you
                  shortly to help plan your celebration.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="grain relative overflow-hidden rounded-2xl border border-sage-dim bg-ink-2 p-6 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.5)] sm:p-9"
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field label="Name" name="name" required />
                  <Field label="Phone Number" name="phone" type="tel" required />
                  <Field label="Email" name="email" type="email" />
                  <Field label="Event Date" name="date" type="date" />
                  <SelectField
                    label="Event Type"
                    name="eventType"
                    options={[
                      "Wedding",
                      "Reception",
                      "Engagement",
                      "Birthday",
                      "Corporate Event",
                    ]}
                  />
                  <SelectField
                    label="Preferred Hall"
                    name="hall"
                    options={[
                      "Samraat Hall",
                      "Platinum Hall",
                      "Royal Hall",
                      "Glass House",
                      "Silver Hall",
                      "Not sure yet",
                    ]}
                  />
                  <Field
                    label="Number of Guests"
                    name="guests"
                    type="number"
                    className="sm:col-span-2"
                  />
                  <label className="flex flex-col gap-2 text-sm text-ivory-dim sm:col-span-2">
                    Message
                    <textarea
                      name="message"
                      rows={4}
                      className="resize-none rounded-lg border border-sage-dim bg-ink px-4 py-3 text-ivory outline-none transition-colors focus:border-gold"
                    />
                  </label>

                  <button
                    type="submit"
                    className="btn-gold transition-transform duration-300 hover:scale-[1.02] active:scale-95 sm:col-span-2"
                  >
                    Get My Free Quote
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  className,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <label className={`flex flex-col gap-2 text-sm text-ivory-dim ${className ?? ""}`}>
      {label}
      <input
        name={name}
        type={type}
        required={required}
        className="rounded-lg border border-sage-dim bg-ink px-4 py-3 text-ivory outline-none transition-colors focus:border-gold"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="flex flex-col gap-2 text-sm text-ivory-dim">
      {label}
      <select
        name={name}
        defaultValue=""
        className="rounded-lg border border-sage-dim bg-ink px-4 py-3 text-ivory outline-none transition-colors focus:border-gold"
      >
        <option value="" disabled>
          Select
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}