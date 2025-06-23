import { useRef } from "react";
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
        className="h-screen overflow-y-auto overflow-x-hidden scroll-smooth"
      >
        {/* Hero Section */}
        <section id="hero" className="snap-start">
          <Hero />
        </section>

        {/* Experience Section */}
        <section id="experience" className="snap-start">
          <Experience />
        </section>

        {/* Projects Section */}
        <section id="projects" className="snap-start">
          <ProjectsSection />
        </section>

        {/* Skills Section */}
        <section id="skills" className="snap-start">
          <Skills />
        </section>

        {/* Contact Section */}
        <section id="contact" className="snap-start">
          <ContactMe />
        </section>
      </div>

      {/* Add this style tag to hide scrollbars */}
      <style jsx global>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .overflow-y-auto::-webkit-scrollbar {
          display: none;
        }
        
        /* Hide scrollbar for IE, Edge and Firefox */
        .overflow-y-auto {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        
        /* Optional: Smooth scrolling for the whole document */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
};

export default App;