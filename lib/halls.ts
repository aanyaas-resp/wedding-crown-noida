export interface Hall {
  slug: string;
  name: string;
  tag: string;
  copy: string;
  capacity: string;
  bgImage: string;
  bgAlt: string;
}

export const HALLS: Hall[] = [
  {
    slug: "samrat",
    name: "Samrat Hall",
    tag: "A Royal Venue for Grand Celebrations",
    copy: "Our largest and most impressive ultramodern banquet hall — step into a majestic setting designed for grand weddings, receptions, large-scale celebrations and corporate events.",
    capacity: "up to 1,500 guests",
    bgImage: "/images/samrat.jpg",
    bgAlt: "Samrat Hall at Wedding Crown, Sector 73, Noida, set up for a grand wedding celebration",
  },
  {
    slug: "royal",
    name: "Royal Hall",
    tag: "Grandeur Meets Timeless Tradition",
    copy: "A spacious, stately hall built for grand, traditional celebrations — elegant weddings, receptions, cocktails and large celebrations with rich interiors and generous space.",
    capacity: "400–800 guests",
    bgImage: "/images/royal.jpg",
    bgAlt: "Royal Hall at Wedding Crown, Sector 73, Noida",
  },
  {
    slug: "platinum",
    name: "Platinum Hall",
    tag: "Refined Elegance for Timeless Weddings",
    copy: "An elegant setting for medium-to-large weddings, receptions and milestone celebrations — polished interiors that balance comfort and sophistication.",
    capacity: "400–700 guests",
    bgImage: "/images/platinium.jpg",
    bgAlt: "Platinum Hall at Wedding Crown, Sector 73, Noida",
  },
  {
    slug: "glass-house",
    name: "Glass House",
    tag: "Celebrate Under an Open Sky",
    copy: "A distinctive, glass-walled celebration space that blends indoor comfort with an open, airy feel — perfect for stylish daytime and evening functions.",
    capacity: "100–200 guests",
    bgImage: "/images/glasshouse.jpg",
    bgAlt: "Glass House at Wedding Crown, Sector 73, Noida",
  },
  {
    slug: "silver",
    name: "Silver Hall",
    tag: "Cozy Elegance for Intimate Gatherings",
    copy: "An intimate indoor venue for smaller celebrations and private gatherings, without compromising on décor and hospitality.",
    capacity: "75–100 guests",
    bgImage: "/images/silver.jpg",
    bgAlt: "Silver Hall at Wedding Crown, Sector 73, Noida",
  },
  {
    slug: "blossom-garden",
    name: "Blossom Garden",
    tag: "Colourful Celebrations in the Open Air",
    copy: "A beautiful outdoor garden setting for colourful, intimate celebrations — lush greenery and open skies for daytime functions and golden-hour photos.",
    capacity: "100–150 guests",
    bgImage: "/images/hero_bg.jpg",
    bgAlt: "Blossom Garden outdoor venue at Wedding Crown, Sector 73, Noida",
  },
  {
    slug: "poolside-lawn",
    name: "Poolside Lawn",
    tag: "A Resort Evening Beneath the Open Sky",
    copy: "A relaxed, resort-style poolside setting for memorable celebrations beneath the open sky — the closest Wedding Crown comes to a destination wedding, without leaving Noida.",
    capacity: "100–200 guests",
    bgImage: "/images/hero_bg.jpg",
    bgAlt: "Poolside Lawn venue at Wedding Crown, Sector 73, Noida, beside the swimming pool",
  },
];

export function getHallBySlug(slug: string) {
  return HALLS.find((h) => h.slug === slug);
}
