"use client";

// GLOBAL IMPORTS
import Image from "next/image";

// INTERNAL IMPORTS
import { BarsIcon, GlassIcon, PhoneIcon, UserIcon } from "@/components/Icons";
import { logo } from "@/assets/images";

export default function Navbar() {
  return (
    <>
      {/* Mobile NavBar */}
      <nav className="flex items-center justify-between px-4 py-3 md:hidden">
        <div className="flex items-center gap-8">
          <BarsIcon />
          <GlassIcon />
        </div>
        <div>
          <Image
            src={logo}
            alt="logo"
            width={63}
            height={63}
            priority
            className="cursor-pointer"
          />
        </div>
        <div className="flex items-center gap-8">
          <PhoneIcon />
          <UserIcon />
        </div>
      </nav>

      {/* Desktop NavBar */}
      <nav className="hidden justify-between p-4 px-8 md:flex">
        <div className="flex items-center gap-8">
          <BarsIcon />
        </div>
        <div>logo</div>
        <div>right icon</div>
      </nav>
    </>
  );
}
