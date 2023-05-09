// INTERNAL IMPORTS
import Navbar from "@/components/Navbar";
import { ChevronDown, OfficeIcon, ViewFinder } from "@/components/Icons";

export default function Home() {
  return (
    <main className="lg:px-10 xl:px-20 2xl:px-40 3xl:px-56">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[420px] overflow-hidden font-sans text-white">
        {/* Background Image */}
        <div className="h-full scale-[1.7] bg-[url('../assets/hero.png')] bg-[center_left_-11rem] md:scale-100 md:bg-cover md:bg-center"></div>
        {/* Title */}
        <div className="absolute top-28 w-full text-center">
          <h3 className="mb-2 text-sm">
            Da una singola postazione a un intero edificio. A te la scelta.
          </h3>
          <h1 className="text-[40px] font-semibold tracking-wide">
            Uffici a modo tuo
            <span className="font-serif text-red-600">.</span>
          </h1>
        </div>
      </section>
      {/* Search Banner */}
      <div className="relative -top-28 mx-auto h-40 w-[90%] rounded-2xl bg-white md:-top-28 md:h-56 md:max-w-2xl lg:max-w-3xl">
        <div className="flex h-1/2 cursor-pointer items-center justify-between overflow-hidden px-6">
          <ul className="flex w-full flex-col gap-8 text-sm md:flex-row md:justify-center">
            <li className="md:border-b-2 md:border-b-red-600 md:py-3">
              <div className="flex items-center gap-3">
                <OfficeIcon />
                Uffici
              </div>
            </li>
            <li className="md:py-3">
              <div className="flex items-center gap-3 ">
                <OfficeIcon />
                Uffici
              </div>
            </li>
            <li className="md:py-3">
              <div className="flex items-center gap-3">
                <OfficeIcon />
                Uffici
              </div>
            </li>
            <li className="md:py-3">
              <div className="flex items-center gap-3">
                <OfficeIcon />
                Uffici
              </div>
            </li>
            <li className="md:py-3">
              <div className="flex items-center gap-3">
                <OfficeIcon />
                Uffici
              </div>
            </li>
          </ul>
          <div className="md:hidden">
            <ChevronDown />
          </div>
        </div>
        <div className="flex h-1/2 items-center rounded-b-2xl bg-[#F4F3F0]">
          <form action="" className="relative w-full px-5">
            <input
              type="text"
              placeholder="Cerca qui"
              className="w-full rounded-lg border border-gray-200 p-3"
            />
            <span className="absolute right-8 top-1/4 flex items-center gap-2 text-red-600 underline underline-offset-2">
              Cerca nelle vicinanze
              <ViewFinder />
            </span>
          </form>
        </div>
      </div>
    </main>
  );
}
