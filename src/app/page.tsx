// INTERNAL IMPORTS
import Navbar from "@/components/Navbar";
import { ctaLinks } from "@/data";
import SearchBanner from "@/components/SearchBanner";
import Card from "@/components/Card";

export default function Home() {
  return (
    <main className="lg:px-10 xl:px-20 2xl:px-40 3xl:px-60">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[420px] overflow-hidden text-white">
        {/* Background Image */}
        <div className="h-full bg-[url('../assets/images/hero.png')] bg-cover bg-[center_left_-19.4rem] sm:scale-[1.7] sm:bg-[center_left_-11rem] md:scale-100 md:bg-cover md:bg-center"></div>
        {/* Title */}
        <div className="absolute top-[120px] w-full px-5 text-center">
          <h3 className="text-sm lg:text-lg">
            Da una singola postazione a un intero edificio. A te la scelta.
          </h3>
          <h1 className="text-[40px] lg:text-[56px]">
            Uffici a modo tuo
            <span className="font-serif text-red-600">.</span>
          </h1>
        </div>
      </section>

      {/* Search Banner */}
      <SearchBanner />

      {/* Section CTA */}
      <section className="mb-12 grid grid-cols-1 grid-rows-6 gap-4 px-6 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 lg:px-0 2xl:grid-cols-6 2xl:grid-rows-1 2xl:gap-x-8">
        {ctaLinks.map((link) => (
          <Card link={link} key={link.id} />
        ))}
      </section>
    </main>
  );
}
