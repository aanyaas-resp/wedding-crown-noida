import Hero from "./components/home/Hero";
import About from "./components/home/About";
import SamratHallSection from "./components/halls/SamratHall";
import RoyalHallSection from "./components/halls/RoyalHall";
import PlatinumHallSection from "./components/halls/PlatiniumHall";
import GlassHouseHallSection from "./components/halls/GlassHall";
import SilverHallSection from "./components/halls/SilverHall";
import BlossomGardenSection from "./components/halls/BlossomHall";
import PoolsideLawnSection from "./components/halls/PoolsideHall";
import ResortStay from "./components/home/ResortStay";
import Events from "./components/home/Events";
import WhyChooseUs from "./components/home/Whychooseus";
import Gallery from "./components/home/Gallery";
import Testimonials from "./components/home/Testimonials";
import Contact from "./components/home/Contact";
import Location from "./components/home/Location";
import FAQ from "./components/home/Faq";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />

      {/* Venues — one full-screen cinematic section per hall/space */}
      <SamratHallSection />
      <RoyalHallSection />
      <PlatinumHallSection />
      <GlassHouseHallSection />
      <SilverHallSection />
      <BlossomGardenSection />
      <PoolsideLawnSection />

      <ResortStay />
      <Events />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <Location />
      <Contact />
      <FAQ />
    </main>
  );
}
