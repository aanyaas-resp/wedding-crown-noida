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
    slug: "samraat",
    name: "Samraat Hall",
    tag: "A Royal Venue for Grand Celebrations",
    copy: "Step into a majestic setting designed for grand celebrations — elegant interiors, spacious seating and premium décor for weddings that call for scale.",
    capacity: "up to 2,000 guests",
    bgImage: "/images/samrat.jpg",
    bgAlt: "Samraat Hall at Wedding Crown, Sector 73, Noida, set up for a grand wedding celebration",
  },
  {
    slug: "platinum",
    name: "Platinum Hall",
    tag: "Refined Elegance for Timeless Weddings",
    copy: "A polished, intimate space that balances comfort and sophistication — perfect for weddings that favour warmth and detail over scale.",
    capacity: "up to 800 guests",
    bgImage: "/images/platinium.jpg",
    bgAlt: "Platinum Hall at Wedding Crown, Sector 73, Noida",
  },
  {
    slug: "royal",
    name: "Royal Hall",
    tag: "Grandeur Meets Timeless Tradition",
    copy: "A stately hall built for grand, traditional celebrations — rich interiors and generous space for ceremonies that honour every ritual in style.",
    capacity: "up to 1,000 guests",
    bgImage: "/images/royal.jpg",
    bgAlt: "Royal Hall at Wedding Crown, Sector 73, Noida",
  },
  {
    slug: "glass-house",
    name: "Glass House",
    tag: "Celebrate Under an Open Sky",
    copy: "A stunning glass-walled venue that blends indoor comfort with an open, airy feel — ideal for daytime ceremonies and evening receptions alike.",
    capacity: "up to 1,200 guests",
    bgImage: "/images/glasshouse.jpg",
    bgAlt: "Glass House at Wedding Crown, Sector 73, Noida",
  },
  {
    slug: "silver",
    name: "Silver Hall",
    tag: "Cozy Elegance for Intimate Gatherings",
    copy: "A warm, intimate hall suited for smaller ceremonies and family functions, without compromising on décor and hospitality.",
    capacity: "up to 400 guests",
    bgImage: "/images/silver.jpg",
    bgAlt: "Silver Hall at Wedding Crown, Sector 73, Noida",
  },
];

export function getHallBySlug(slug: string) {
  return HALLS.find((h) => h.slug === slug);
}