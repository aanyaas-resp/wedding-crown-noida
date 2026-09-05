// app/halls/samraat/page.tsx
import HallHero from "@/app/components/home/HallHero";
import { getHallBySlug } from "@/lib/halls";
import { notFound } from "next/navigation";

export default function SamraatHallPage() {
  const hall = getHallBySlug("samraat");
  if (!hall) return notFound();
  return <HallHero hall={hall} />;
}