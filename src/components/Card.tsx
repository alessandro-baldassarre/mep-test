// GLOBAL IMPORTS
import Image from "next/image";
import Link from "next/link";

// INTERNAL IMPORTS
import { CTALink } from "@/types";

interface CardProps {
  link: CTALink;
}

export default function Card({ link }: CardProps) {
  return (
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
  );
}
