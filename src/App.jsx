import { useEffect, useState } from "react";

import "./App.css";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Services from "./components/Services";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Particles from "./components/Particles";
import Preloader from "./components/Preloader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      <Particles
        particleColors={["#d4af37"]}
        particleCount={200}
        particleSpread={10}
        alphaParticles={false}
        disableRotation={false}
        pixelRatio={1}
        moveParticlesOnHover={true}
        particleHoverFactor={1}
        speed={0.05}
      />

      <Preloader loading={loading} />

      {!loading && (
        <>
          <Navbar />
          <HeroSection />
          <About />
          <Education />
          <Services />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
