"use client";

// GLOBAL IMPORTS
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsStaggered,
  faChevronRight,
  faPhone,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

// INTERNAL IMPORTS
import { logo } from "@/assets/images";
import { navLinks } from "@/data";

export default function Navbar() {
  const [navlinkOver, setNavlinkOver] = useState<string>("");

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

      {/* Opacity layer */}
      <div
        className={
          navlinkOver !== ""
            ? `absolute left-0 top-[136px] z-10 h-screen w-screen bg-white bg-opacity-60 backdrop-blur-sm`
            : `hidden`
        }
      />
      <nav className="relative hidden h-16 justify-between md:flex 2xl:h-[88px]">
        {/* left */}
        <div className="flex h-full items-center gap-4 py-6">
          <Link href={"/"}>
            <Image src={logo} alt="logo" width={78} height={78} priority />
          </Link>
          <div className="flex h-full items-center gap-5 border-l border-gray-300 px-5">
            {navLinks.map((link) => (
              <div
                key={link.id}
                onMouseOver={() => setNavlinkOver(link.id)}
                className={`relative cursor-pointer rounded-md border border-gray-300 px-3 py-1 text-slate-900 ${
                  navlinkOver === link.id ? "bg-[#008385] text-white" : null
                }`}
              >
                <span>{link.linkName}</span>
                <div
                  onMouseOut={() => setNavlinkOver("")}
                  className={
                    navlinkOver === link.id
                      ? `absolute -left-28 top-[60px] z-20 w-[770px] rounded-xl bg-white  text-slate-700 shadow-4xl`
                      : `hidden`
                  }
                >
                  <div className="absolute bottom-full left-36 h-0 w-0 border-b-[11px] border-l-[10px] border-r-[10px] border-b-white border-l-transparent border-r-transparent shadow-3xl" />
                  <div className="mx-10 flex items-center justify-between border-b border-gray-300 pb-5 pt-12">
                    <h2 className="text-2xl">{link.linkName}</h2>
                    {link.subTitle.length > 0 ? (
                      <span className="flex items-center gap-4 text-red-600 underline underline-offset-4">
                        {link.subTitle}
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          className="text-sm font-thin"
                        />
                      </span>
                    ) : null}
                  </div>
                  <div className="mx-10 grid grid-cols-2 grid-rows-3 gap-x-20 gap-y-6 py-6">
                    {link.subLinks.map((subLink) => (
                      <div
                        key={subLink.id}
                        className="flex items-center gap-4 py-2"
                      >
                        <Image
                          src={subLink.icon}
                          alt="icon"
                          width={24}
                          height={24}
                          priority
                        />
                        <span className="text-lg">{subLink.linkName}</span>
                      </div>
                    ))}
                  </div>
                  <div className="h-10 rounded-b-xl bg-[#F4F3F0]" />
                </div>
              </div>
            ))}
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
