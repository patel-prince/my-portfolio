import Image from "next/image";
import HeroImage from "@/assets/prince.png";
import HeroBg from "@/assets/hero-bg.png";
import { FiArrowRight } from "react-icons/fi";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section
      className={styles.heroSection}
      style={{ backgroundImage: `url(${HeroBg.src})` }}
    >
      <div className="container flex h-full">
        <div className={styles.heroContent}>
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
            <span>LET&apos;S CONNECT</span>
            <span className="app-button-icon" aria-hidden="true">
              <FiArrowRight size={18} />
            </span>
          </button>
        </div>
        <div className={styles.heroImage}>
          <Image src={HeroImage} alt="hero" priority />
        </div>
      </div>
    </section>
  );
};

export default Hero;
