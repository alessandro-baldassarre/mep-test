"use client";

// GLOBAL IMPORTS
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsStaggered,
  faPhone,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

// INTERNAL IMPORTS
import { logo } from "@/assets/images";

export default function Navbar() {
  return (
    <>
      {/* Mobile NavBar */}
      <nav className="flex h-16 items-center justify-between px-4 md:hidden">
        {/* left */}
        <div className="flex items-center gap-10">
          <FontAwesomeIcon icon={faBarsStaggered} className="text-[#393939]" />
          <FontAwesomeIcon icon={faSearch} className="text-[#393939]" />
        </div>
        {/* center */}
        <div>
          <Link href={"/"}>
            <Image
              src={logo}
              alt="logo"
              width={63}
              height={63}
              priority
              className="cursor-pointer"
            />
          </Link>
        </div>
        {/* right */}
        <div className="flex items-center gap-10">
          <FontAwesomeIcon icon={faPhone} className="text-[#393939]" />
          <FontAwesomeIcon icon={faUser} className="text-[#393939]" />
        </div>
      </nav>

      {/* Desktop NavBar */}
      <nav className="hidden h-16 justify-between md:flex 2xl:h-[88px]">
        {/* left */}
        <div className="flex h-full items-center gap-4 py-6">
          <Link href={"/"}>
            <Image src={logo} alt="logo" width={78} height={78} priority />
          </Link>
          <div className="flex h-full items-center gap-5 border-l border-gray-300 px-5">
            <button className="rounded-md border border-gray-300 px-3 py-1 text-slate-900">
              Che cosa facciamo
            </button>
            <button className="rounded-md border border-gray-300 px-3 py-1 text-slate-900">
              Inizia
            </button>
            <button className="rounded-md border border-gray-300 px-3 py-1 text-slate-900">
              Scopri Regus
            </button>
          </div>
        </div>
        {/* right */}
        <div className="mr-20 flex h-full cursor-pointer items-center gap-4 py-6">
          <div className="flex h-full items-center pr-4">
            <FontAwesomeIcon
              icon={faPhone}
              className="text-lg text-[#393939]"
            />
          </div>
          <div className="flex h-full cursor-pointer items-center gap-2 border-x border-gray-300 px-8 text-[#393939]">
            <FontAwesomeIcon icon={faSearch} className="text-lg" />
            Cerca una sede
          </div>
          <div className="flex h-full items-center pl-4">
            <FontAwesomeIcon
              icon={faUser}
              className="cursor-pointer text-lg text-[#393939]"
            />
          </div>
        </div>
      </nav>
    </>
  );
}
