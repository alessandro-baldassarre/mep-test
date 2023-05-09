import Link from "next/link";
import "./globals.css";
import localFont from "next/font/local";

const effra = localFont({
  src: [
    {
      path: "./assets/fonts/Effra-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./assets/fonts/Effra-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./assets/fonts/Effra-Medium.woff2",
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="inline-block w-4 align-middle"
            >
              <path
                fillRule="evenodd"
                d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
        {children}
      </body>
    </html>
  );
}
