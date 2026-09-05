import SamraatHallSection from "./components/halls/SamratHall";
import PlatinumHallSection from "./components/halls/PlatiniumHall";
import RoyalHallSection from "./components/halls/RoyalHall";
import GlassHouseHallSection from "./components/halls/GlassHall";
import SilverHallSection from "./components/halls/SilverHall";
import Hero from "./components/home/Hero";
import Gallery from "./components/home/Gallery";
import Testimonials from "./components/home/Testimonials";
import Contact from "./components/home/Contact";
import FAQ from "./components/home/Faq";
import Location from "./components/home/Location";

export default function Home() {
  return (
    <main>
      <Hero />
      <SamraatHallSection />
      <PlatinumHallSection />
      <RoyalHallSection />
      <GlassHouseHallSection />
      <SilverHallSection />
      <Gallery />
      <Testimonials />
      <Contact />
      <Location />
      <FAQ />
    </main>
  );
}