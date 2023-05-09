import Image from "next/image";

import logo from "./assets/logo.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image src={logo} alt="logo" />
    </main>
  );
}
