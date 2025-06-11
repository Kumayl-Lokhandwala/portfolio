import React, { useRef } from "react";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

const App = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Navbar scrollRef={scrollRef} />
      <div
        ref={scrollRef}
        className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth"
      >
        <section id="hero" className="snap-start h-screen">
          <Hero />
        </section>
        <section id="experience" className="snap-start h-screen">
          <Experience />
        </section>
        <section id="projects" className="snap-start h-screen">
          <Projects/>
        </section>
        {/* Add more sections like Projects, Skills, etc. */}
      </div>
    </>
  );
};

export default App;
