// app/halls/royal/page.tsx
import HallHero from "@/app/components/home/HallHero";
import { getHallBySlug } from "@/lib/halls";
import { notFound } from "next/navigation";

export default function RoyalHallPage() {
  const hall = getHallBySlug("royal");
  if (!hall) return notFound();
  return <HallHero hall={hall} />;
}