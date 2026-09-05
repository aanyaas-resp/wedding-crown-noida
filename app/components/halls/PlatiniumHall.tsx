// app/halls/platinum/page.tsx
import HallHero from "@/app/components/home/HallHero";
import { getHallBySlug } from "@/lib/halls";
import { notFound } from "next/navigation";

export default function PlatinumHallPage() {
  const hall = getHallBySlug("platinum");
  if (!hall) return notFound();
  return <HallHero hall={hall} />;
}