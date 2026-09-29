# Wedding Crown: Wedding & Banquet Venue Website

Website for **Wedding Crown**, a wedding, banquet and resort venue in **Sector 73, Noida**, hosting weddings, receptions, sangeets, birthdays and corporate events across seven event spaces.

🌐 **Live site:** [weddingcrown.co.in](https://weddingcrown.co.in)

> Designed & developed by [Aniket Jamunde](https://aniketwebdev.in) · [aniketwebdev.in](https://aniketwebdev.in)

---

## ✨ Overview

A single-page, mobile-first website built to turn visitors into venue visits and enquiries. It showcases every hall and outdoor space, the resort rooms and pool, and makes it easy to book a visit by form, call or WhatsApp.

### Key features

- **Hero section** with a full-screen venue image and calls to action (Book a Visit, Call Now)
- **Animated stats** for guest capacity, years of legacy and celebrations hosted
- **Venue sections for all 7 event spaces**, each with its own description, seating capacity and "Book This Hall" button:
  Samrat Hall · Royal Hall · Platinum Hall · Glass House · Silver Hall · Blossom Garden · Poolside Lawn
- **Resort & Pool section** covering rooms, swimming pool and multi-day celebrations
- **Events We Host**: weddings, receptions, haldi & mehndi, sangeet & cocktail, birthdays and corporate events
- **Why Wedding Crown** highlights: in-house catering, event support, parking, indoor and outdoor options, 100% vegetarian property
- **Filterable gallery** (All, Weddings, Halls, Décor, Resort & Pool, Dining)
- **Testimonials** from guests and corporate clients
- **Location section** with address, embedded Google Map and directions link
- **Enquiry form** ("Get My Free Quote") with event type, preferred hall, date and guest count
- **FAQ** covering capacity, resort stay, multi-function events, corporate events, catering and parking
- **Click-to-call and WhatsApp** buttons throughout, including a persistent floating button on mobile
- **Smooth scroll navigation** and section animations with GSAP

### SEO

- Page title, meta description and local keywords (Noida, Sector 73, banquet hall)
- Open Graph and Twitter metadata with `en_IN` locale
- Semantic sections with anchor navigation and descriptive `alt` text on venue images

---

## 🛠 Tech Stack

| Area | Technology |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| UI library | [React 19](https://react.dev) |
| Language | [TypeScript](https://www.typescriptlang.org) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| Animation | [GSAP](https://gsap.com) |
| Icons | [React Icons](https://react-icons.github.io/react-icons/) |
| Utilities | `clsx`, `tailwind-merge` |
| Performance | React Compiler (`babel-plugin-react-compiler`) |
| Linting | ESLint 9 + `eslint-config-next` |

---

## 📁 Project Structure

```
wedding-crown-noida/
├── app/                 # Next.js App Router (pages, layout, sections)
├── lib/                 # Shared helpers and utilities
├── public/
│   └── images/          # Hero, hall, gallery and resort images
├── next.config.ts       # Next.js configuration
├── postcss.config.mjs   # PostCSS / Tailwind config
├── tsconfig.json        # TypeScript config
├── eslint.config.mjs    # ESLint config
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20 or later
- npm (or yarn / pnpm / bun)

### Installation

```bash
git clone https://github.com/aanyaas-resp/wedding-crown-noida.git
cd wedding-crown-noida
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Run the production build |
| `npm run lint` | Lint the codebase with ESLint |

---

## ☁️ Deployment

The site is live at [weddingcrown.co.in](https://weddingcrown.co.in). It can be deployed on [Vercel](https://vercel.com) or any host that supports Next.js.

---

## 🔒 License, Privacy & Disclaimer

**© 2026 Wedding Crown. All rights reserved.**

This repository contains a **custom website built for a client**. The source code, design, copy, logo, photographs and all other assets are the **private property of the client and the developer**.

- This code is **not open source** and is **not licensed** for reuse, copying, redistribution or resale.
- Venue branding, photos, testimonials and content may **not** be used elsewhere without written permission.
- The code is shared here for **portfolio and reference purposes only**.

Want a website like this for your business? [Get in touch](https://aniketwebdev.in).

---

## 👨‍💻 Developer

**Aniket Jamunde**, Freelance Web Developer
[aniketwebdev.in](https://aniketwebdev.in) · [GitHub](https://github.com/aanyaas-resp)
