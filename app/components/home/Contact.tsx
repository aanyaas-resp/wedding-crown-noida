"use client";

import { FormEvent, useState } from "react";
import { HiOutlinePhone } from "react-icons/hi";
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
    <section id="contact" ref={ref} className="container-crown py-28 md:py-36">
      <div className="grid gap-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <p data-reveal className="label-eyebrow mb-5">
            Book a Visit
          </p>
          <h2 data-reveal className="font-display text-balance text-4xl leading-tight text-ivory md:text-5xl">
            Your dream celebration starts here
          </h2>
          <p data-reveal className="mt-6 max-w-sm text-balance leading-relaxed text-ivory-dim">
            Tell us about your event and let our team help you create a
            celebration to remember.
          </p>

          <div data-reveal className="mt-10 flex flex-col gap-4">
            <a
              href={SITE.phone1Href}
              className="flex items-center gap-3 text-ivory-dim transition-colors hover:text-gold"
            >
              <HiOutlinePhone className="text-gold" size={20} />
              {SITE.phone1}
            </a>
            <a
              href={SITE.phone2Href}
              className="flex items-center gap-3 text-ivory-dim transition-colors hover:text-gold"
            >
              <HiOutlinePhone className="text-gold" size={20} />
              {SITE.phone2}
            </a>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-ivory-dim transition-colors hover:text-gold"
            >
              <FaWhatsapp className="text-gold" size={20} />
              WhatsApp Us
            </a>
          </div>
        </div>

        <div data-reveal className="md:col-span-7">
          {submitted ? (
            <div className="flex h-full min-h-[24rem] flex-col items-center justify-center border border-sage-dim p-10 text-center">
              <p className="font-display text-2xl text-gold">
                Thank you.
              </p>
              <p className="mt-3 max-w-sm text-sm text-ivory-dim">
                We&apos;ve received your enquiry. Our team will call you
                shortly to help plan your celebration.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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
                  className="border border-sage-dim bg-transparent px-4 py-3 text-ivory outline-none transition-colors focus:border-gold"
                />
              </label>

              <button type="submit" className="btn-gold sm:col-span-2">
                Get My Free Quote
              </button>
            </form>
          )}
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
        className="border border-sage-dim bg-transparent px-4 py-3 text-ivory outline-none transition-colors focus:border-gold"
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
        className="border border-sage-dim bg-ink px-4 py-3 text-ivory outline-none transition-colors focus:border-gold"
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