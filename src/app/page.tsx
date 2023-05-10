// GLOBAL IMPORTS
import Image from "next/image";

// INTERNAL IMPORTS
import Navbar from "@/components/Navbar";
import { ChevronDown, GlassIcon } from "@/components/Icons";
import { searchLinks } from "@/data";
import { location } from "@/assets/images";

export default function Home() {
  return (
    <main className="lg:px-10 xl:px-20 2xl:px-40 3xl:px-56">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[420px] overflow-hidden font-sans text-white">
        {/* Background Image */}
        <div className="h-full scale-[1.7] bg-[url('../assets/images/hero.png')] bg-[center_left_-11rem] md:scale-100 md:bg-cover md:bg-center"></div>
        {/* Title */}
        <div className="absolute top-28 w-full text-center">
          <h3 className="mb-2 text-sm lg:text-lg">
            Da una singola postazione a un intero edificio. A te la scelta.
          </h3>
          <h1 className="text-4xl lg:text-[56px]">
            Uffici a modo tuo
            <span className="font-serif text-red-600">.</span>
          </h1>
        </div>
      </section>

      {/* Search Banner */}
      <div className="relative -top-28 mx-auto h-44 w-[90%] rounded-2xl bg-white shadow-3xl md:-top-28 md:h-56 md:max-w-2xl lg:max-w-3xl">
        {/* Top */}
        <div className="flex h-1/2 cursor-pointer justify-between overflow-hidden px-6">
          <ul className="flex w-full flex-col gap-8 py-8 text-sm md:flex-row md:justify-center">
            {searchLinks.map((link) => (
              // TODO: Manage active link with useState and onClick
              <li
                key={link.id}
                className={
                  link.id === "office"
                    ? `border-b-2 border-b-red-600 md:py-2`
                    : `md:py-2`
                }
              >
                <div className="flex items-center gap-3">
                  <Image src={link.icon} alt="icon" width={24} height={24} />
                  {link.title}
                </div>
              </li>
            ))}
          </ul>
          <div className="py-8 md:hidden">
            <ChevronDown />
          </div>
        </div>
        {/* bottom */}
        <div className="flex h-1/2 items-center gap-4 rounded-b-2xl bg-[#F4F3F0] px-4 md:px-8">
          <form action="" className="relative w-full md:w-4/6">
            <input
              type="text"
              placeholder="Cerca qui"
              className="border-gray-160 w-full rounded-lg border p-4"
            />
            <span className="absolute right-8 top-1/4 flex items-center gap-2 text-red-600 underline underline-offset-2">
              Cerca nelle vicinanze
              <Image
                src={location}
                alt="icon"
                width={16}
                height={16}
                className="h-auto w-auto"
              />
            </span>
          </form>
          <button className="hidden flex-grow items-center justify-center gap-2 rounded-lg bg-red-600 p-4 uppercase text-white md:flex">
            <GlassIcon />
            Cerca
          </button>
        </div>

        {/* Section CTA */}
        <section></section>
      </div>
    </main>
  );
}
