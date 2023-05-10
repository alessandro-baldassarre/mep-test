// GLOBAL IMPORTS
import Image from "next/image";
import Link from "next/link";

// INTERNAL IMPORTS
import Navbar from "@/components/Navbar";
import { ctaLinks, searchLinks } from "@/data";
import { location } from "@/assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <main className="lg:px-10 xl:px-20 2xl:px-40 3xl:px-56">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[420px] overflow-hidden text-white">
        {/* Background Image */}
        <div className="h-full bg-[url('../assets/images/hero.png')] bg-cover bg-[center_left_-19.4rem] sm:scale-[1.7] sm:bg-[center_left_-11rem] md:scale-100 md:bg-cover md:bg-center"></div>
        {/* Title */}
        <div className="absolute top-28 w-full px-4 text-center">
          <h3 className="mb-2 text-sm lg:text-lg">
            Da una singola postazione a un intero edificio. A te la scelta.
          </h3>
          <h1 className="text-[40px] lg:text-[56px]">
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
                    ? `border-b-red-600 md:border-b-2 md:py-2`
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
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </div>
        {/* bottom */}
        <div className="flex h-1/2 items-center gap-4 rounded-b-2xl bg-[#F4F3F0] p-4 md:p-7 md:px-8">
          <form
            action=""
            className="flex h-full w-full items-center justify-between gap-4 rounded-lg border border-gray-300 bg-white px-4 md:w-4/6"
          >
            <input
              type="text"
              placeholder="Cerca qui"
              className="w-16 appearance-none rounded-lg"
            />
            <span className="flex items-center gap-2 text-red-600 underline underline-offset-2">
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
            <FontAwesomeIcon icon={faSearch} />
            Cerca
          </button>
        </div>
      </div>

      {/* Section CTA */}
      <section className="mb-12 grid grid-cols-1 grid-rows-6 gap-4 px-6 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 lg:px-0 2xl:grid-cols-6 2xl:grid-rows-1">
        {ctaLinks.map((link) => (
          <div
            key={link.id}
            className="rounded-2xl border-2 border-[#EAECEE] p-6 hover:shadow-2xl"
          >
            <Link
              href={`/it-it/${link.id}`}
              className="flex items-start gap-5 2xl:flex-col"
            >
              <div className="relative h-10 w-10 2xl:h-12 2xl:w-12">
                <Image src={link.icon} alt="icon" fill priority />
              </div>
              <div>
                <h3 className="mb-4 text-red-600 underline underline-offset-4">
                  {link.title}
                </h3>
                <p className="mb-4 text-sm text-gray-400 ">{link.subtitle}</p>
              </div>
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
}
