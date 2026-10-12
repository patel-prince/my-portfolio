import Header from "@/sections/header";
import Hero from "@/sections/hero";
import HeroStats from "@/sections/hero-stats";
import About from "@/sections/about";
import Experience from "@/sections/experience";
import TechnicalExpertise from "@/sections/technical-expertise";
import EngineeringApproach from "@/sections/engineering-approach";

export default function Home() {
  return (
    <>
      <Header />
      <main className="app-body">
        <Hero />
        <HeroStats />
        <About />
        <Experience />
        <TechnicalExpertise />
        <EngineeringApproach />
      </main>
    </>
  );
}
