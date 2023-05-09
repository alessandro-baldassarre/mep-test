import Navbar from "@/app/components/Navbar";

export default function Home() {
  return (
    <main className="lg:px-10 xl:px-20 2xl:px-40 3xl:px-56">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-[420px] overflow-hidden font-sans text-white">
        <div className="h-full scale-[1.7] bg-[url('./assets/hero.png')] bg-[center_left_-11rem] md:scale-100 md:bg-cover"></div>
        <div className="absolute top-28 w-full text-center">
          <p className="mb-2 text-sm">
            Da una singola postazione a un intero edificio. A te la scelta.
          </p>
          <h1 className="text-[40px] font-semibold tracking-wide">
            Uffici a modo tuo
            <span className="font-serif text-red-600">.</span>
          </h1>
        </div>
      </section>
    </main>
  );
}
