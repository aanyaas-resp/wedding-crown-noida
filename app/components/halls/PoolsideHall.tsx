// Poolside Lawn — resort-style outdoor venue section
import HallHero from "@/app/components/home/HallHero";
import { getHallBySlug } from "@/lib/halls";
import { notFound } from "next/navigation";

export default function PoolsideLawnSection() {
  const hall = getHallBySlug("poolside-lawn");
  if (!hall) return notFound();
  return <HallHero hall={hall} />;
}
