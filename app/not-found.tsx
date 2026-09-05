import Link from "next/link";
import { HiOutlineHome } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa6";
import { SITE } from "@/lib/data";

export default function NotFound() {
  return (
    <main className="grain relative flex min-h-[100dvh] items-center justify-center overflow-hidden bg-ink px-6">
      {/* Ambient background glows, consistent with the rest of the site */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-sage/10 blur-3xl"
      />

      <div className="container-crown relative flex max-w-xl flex-col items-center text-center">
        <p className="label-eyebrow mb-6">Page Not Found</p>

        <h1 className="font-display text-balance text-[5rem] leading-none text-gold sm:text-[7rem]">
          404
        </h1>

        <div className="rule my-8 w-full max-w-[10rem]" />

        <h2 className="font-display text-balance text-3xl leading-tight text-ivory sm:text-4xl">
          This page has wandered off the celebration
        </h2>
        <p className="mt-5 max-w-md text-balance leading-relaxed text-ivory-dim">
          The page you&apos;re looking for doesn&apos;t exist or may have
          been moved. Let&apos;s get you back to{" "}
          <span className="text-gold">{SITE.name}</span>.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/"
            className="btn-gold transition-transform duration-300 hover:scale-[1.03] active:scale-95"
          >
            <HiOutlineHome size={18} />
            Back to Home
          </Link>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost transition-colors duration-300"
          >
            <FaWhatsapp size={18} />
            Contact Us Instead
          </a>
        </div>
      </div>
    </main>
  );
}