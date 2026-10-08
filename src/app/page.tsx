import Header from "@/sections/header";
import Hero from "@/sections/hero";
import HeroStats from "@/sections/hero-stats";
import About from "@/sections/about";

export default function Home() {
  return (
    <>
      <Header />
      <main className="app-body">
        <Hero />
        <HeroStats />
        <About />
      </main>
    </>
  );
}
