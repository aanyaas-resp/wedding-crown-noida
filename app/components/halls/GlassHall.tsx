// app/halls/glass-house/page.tsx
import HallHero from "@/app/components/home/HallHero";
import { getHallBySlug } from "@/lib/halls";
import { notFound } from "next/navigation";

export default function GlassHouseHallPage() {
  const hall = getHallBySlug("glass-house");
  if (!hall) return notFound();
  return <HallHero hall={hall} />;
}