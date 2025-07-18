import { useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";
import Resume from "./components/Resume";

const AppContent = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Check if we're on the resume page
  const isResumePage = location.pathname === "/resume";

  return (
    <>
      {!isResumePage && <Navbar scrollRef={scrollRef} />}

      <div
        ref={scrollRef}
        className={`${isResumePage ? "bg-black" : ""} ${
          isResumePage ? "h-screen" : "h-screen"
        } overflow-y-auto scroll-smooth overflow-x-hidden`}
      >
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="hero" className="snap-start">
                  <Hero />
                </section>
                <section id="experience" className="snap-start">
                  <Experience />
                </section>
                <section id="projects" className="snap-start">
                  <ProjectsSection />
                </section>
                <section id="skills" className="snap-start">
                  <Skills />
                </section>
                <section id="contact" className="snap-start">
                  <ContactMe />
                </section>
              </>
            }
          />

          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
