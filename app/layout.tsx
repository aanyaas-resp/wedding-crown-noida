import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/data";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.weddingcrown.in"),
  title: `${SITE.name} | ${SITE.tagline}`,
  description:
    "Wedding Crown is a luxury wedding and banquet venue in Sector 73, Noida, offering elegant halls, in-house catering and full event support for weddings, receptions and corporate events.",
  keywords: [
    "wedding venue Noida",
    "banquet hall Noida",
    "Wedding Crown",
    "Sector 73 Noida wedding hall",
  ],
  openGraph: {
    title: `${SITE.name} | ${SITE.tagline}`,
    description:
      "Elegant spaces, beautiful décor and exceptional hospitality for your special occasions in Noida.",
    siteName: SITE.name,
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable}`}>
      <body className="grain">
        <Navbar />
        {children}
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}