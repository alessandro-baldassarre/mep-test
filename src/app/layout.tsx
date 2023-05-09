// GLOBAL IMPORTS
import Link from "next/link";
import localFont from "next/font/local";

// INTERNAL IMPORTS
import "./globals.css";
import { ChevronRight } from "@/components/Icons";

const effra = localFont({
  src: [
    {
      path: "../assets/fonts/Effra-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/Effra-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Effra-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-effra",
});

export const metadata = {
  title: "Uffici, Coworking e Sale Riunioni | Regus",
  description:
    "Postazioni di lavoro all'interno di ambienti stimolanti! Regus offre una vasta gamma di soluzioni di coworking, sale riunioni e uffici personalizzati.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={effra.variable}>
      <body>
        <div className="bg-[#393939] px-10 py-[10px] font-sans text-lg leading-8 text-white">
          <Link href="/it-it/promotion" className="hover:underline">
            Spazi di lavoro impareggiabili. Ottimi sconti. Paghi il 25% in meno.
            *Si applicano Termini e condizioni
            <ChevronRight />
          </Link>
        </div>
        {children}
      </body>
    </html>
  );
}
