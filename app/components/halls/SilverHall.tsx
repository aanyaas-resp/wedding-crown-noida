// app/halls/silver/page.tsx
import HallHero from "@/app/components/home/HallHero";
import { getHallBySlug } from "@/lib/halls";
import { notFound } from "next/navigation";

export default function SilverHallPage() {
  const hall = getHallBySlug("silver");
  if (!hall) return notFound();
  return <HallHero hall={hall} />;
}