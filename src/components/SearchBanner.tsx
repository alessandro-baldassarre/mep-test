// GLOBAL IMPORTS
import Image from "next/image";

//INTERNAL IMPORTS
import { location } from "@/assets/images";
import { searchLinks } from "@/data";
import { faChevronDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchBanner() {
  return (
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
  );
}
