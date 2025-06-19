import React, { useRef } from "react";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";

const App = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Navbar scrollRef={scrollRef} />
      <div
        ref={scrollRef}
        className="h-screen overflow-y-auto scroll-smooth sm:snap-y sm:snap-mandatory"
      >
        <section id="hero" className="snap-start min-h-screen sm:h-screen">
          <Hero />
        </section>
        <section id="experience" className="snap-start min-h-auto sm:h-screen">
          <Experience />
        </section>
        <section id="projects" className="snap-start min-h-screen sm:h-screen">
          <ProjectsSection />
        </section>
        <section id="skills" className="snap-start min-h-screen sm:h-screen">
          {/* Skills section can be added here */}
          <Skills/>
        </section>
        <section id="contact" className="snap-start min-h-screen sm:h-screen">
          {/* Contact section can be added here */}
          <ContactMe/>
        </section>
      </div>
    </>
  );
};

export default App;
