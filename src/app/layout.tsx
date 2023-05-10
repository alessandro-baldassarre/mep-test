// GLOBAL IMPORTS
import Link from "next/link";
import localFont from "next/font/local";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

// INTERNAL IMPORTS
import "./globals.css";

// Fontawesome config
config.autoAddCss = false;

// Effra font
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
      <body className="font-sans">
        <div className="bg-[#393939] px-10 py-2 text-lg leading-8 text-white">
          <Link href="/it-it/promotion" className="hover:underline">
            Spazi di lavoro impareggiabili. Ottimi sconti. Paghi il 25% in meno.
            *Si applicano Termini e condizioni
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-sm font-thin"
            />
          </Link>
        </div>
        {children}
      </body>
    </html>
  );
}
