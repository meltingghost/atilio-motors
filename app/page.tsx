import Navbar from "@/app/components/navbar";
import Hero from "@/app/components/hero";
import VehicleSearch from "@/app/components/vehicle-search";
import BrandCarousel from "@/app/components/brand-carousel";
import InfoSections from "@/app/components/info-sections";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <VehicleSearch />
        <BrandCarousel />
        <InfoSections />
      </main>
    </div>
  );
}
