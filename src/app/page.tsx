import Image from "next/image";
import Header from "./secttions/Header";
import HeroImage from "@/assets/prince.png";
import HeroBg from "@/assets/hero-bg.png";
export default function Home() {
  return (
    <>
      <Header />
      <div className="app-body">
        <div
          className="hero-section"
          style={{ backgroundImage: `url(${HeroBg.src})` }}
        >
          <div className="container flex h-full">
            <div className="hero-content">
              <h2 className="text-8xl flex flex-col">
                <span className="text-center weight-600">DESIGNED</span>
                <span className="text-center weight-200">FOR PEOPLE</span>
                <span className="text-center weight-600">ENGINEERED</span>
                <span className="text-center weight-200">FOR REAL WORLD</span>
              </h2>
              <p className="max-w-500 weight-400">
                I bridge product thinking and engineering to create digital
                experiences that are simple on the surface but powerfull under
                the hood.
              </p>
              <button className="app-button app-button-lg">
                LET'S CONNECT
              </button>
            </div>
            <div className="hero-image">
              <Image src={HeroImage} alt="hero" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
