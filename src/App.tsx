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
        className="h-screen overflow-y-auto scroll-smooth"
      >
        {/* Hero Section - Let it determine its own height */}
        <section id="hero" className="snap-start">
          <Hero />
        </section>

        {/* Experience Section - Let it determine its own height */}
        <section id="experience" className="snap-start">
          <Experience />
        </section>

        {/* Projects Section - Let it determine its own height */}
        <section id="projects" className="snap-start">
          <ProjectsSection />
        </section>

        {/* Skills Section - Let it determine its own height */}
        <section id="skills" className="snap-start">
          <Skills />
        </section>

        {/* Contact Section - Let it determine its own height */}
        <section id="contact" className="snap-start">
          <ContactMe />
        </section>
      </div>
    </>
  );
};

export default App;