// Blossom Garden — outdoor venue section
import HallHero from "@/app/components/home/HallHero";
import { getHallBySlug } from "@/lib/halls";
import { notFound } from "next/navigation";

export default function BlossomGardenSection() {
  const hall = getHallBySlug("blossom-garden");
  if (!hall) return notFound();
  return <HallHero hall={hall} />;
}
