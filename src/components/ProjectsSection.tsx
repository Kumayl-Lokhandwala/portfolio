import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useSwipeable } from "react-swipeable";
import projectsData from "../data/projectsData";

const ProjectsSection = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const [index, setIndex] = useState(3);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const originalItems = projectsData;
  const totalItems = originalItems.length;

  useEffect(() => {
    const updateCount = () => {
      const isMobile = window.innerWidth < 640;
      setVisibleCount(isMobile ? 1 : 3);
      setIndex(isMobile ? 1 : 3);
    };

    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  const extendedItems = [
    ...originalItems.slice(-visibleCount),
    ...originalItems,
    ...originalItems.slice(0, visibleCount),
  ];

  const handleTransitionEnd = () => {
    if (index >= totalItems + visibleCount) {
      setTransitionEnabled(false);
      setIndex(visibleCount);
    } else if (index < visibleCount) {
      setTransitionEnabled(false);
      setIndex(totalItems + visibleCount - 1);
    }
  };

  useEffect(() => {
    const node = wrapperRef.current;
    if (node) node.addEventListener("transitionend", handleTransitionEnd);
    return () => {
      if (node) node.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, [index, visibleCount, totalItems]);

  useEffect(() => {
    if (!transitionEnabled) {
      const timeout = setTimeout(() => {
        setTransitionEnabled(true);
      }, 20);
      return () => clearTimeout(timeout);
    }
  }, [transitionEnabled]);

  const scrollLeft = () => setIndex((prev) => prev - 1);
  const scrollRight = () => setIndex((prev) => prev + 1);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: scrollRight,
    onSwipedRight: scrollLeft,
    trackMouse: true,
  });

  return (
    <section
      id="projects"
      className="relative bg-gradient-to-br from-[#0b0f19] via-[#0f172a] to-[#1e293b] text-white px-[5%] py-[6%] min-h-screen flex flex-col justify-center items-center"
    >
      <div className="w-full max-w-7xl relative z-10 flex flex-col justify-center items-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300 mb-4">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="relative overflow-hidden w-full">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-sky-500/20 hover:bg-sky-500/40 rounded-full transition"
          >
            <ChevronLeft className="text-sky-300 w-6 h-6" />
          </button>

          <div className="overflow-hidden px-2 sm:px-6" {...swipeHandlers}>
            <div
              ref={wrapperRef}
              className="flex"
              style={{
                width: `${(100 / visibleCount) * extendedItems.length}%`,
                transform: `translateX(-${(100 / extendedItems.length) * index}%)`,
                transition: transitionEnabled ? "transform 0.6s ease" : "none",
              }}
            >
              {extendedItems.map((project, i) => (
                <div
                  key={i}
                  className="px-4 sm:px-6"
                  style={{
                    width: `${100 / extendedItems.length}%`,
                    flexShrink: 0,
                  }}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-3xl overflow-hidden shadow-2xl border border-sky-400/10 hover:border-sky-400/30 backdrop-blur-md bg-[#1e293b]/60 hover:bg-[#1e293b]/80 transition-all duration-500 hover:scale-[1.05] hover:rotate-[-1deg] hover:z-10 relative h-full flex flex-col justify-between"
                  >
                    <div className="h-72 sm:h-56 w-full overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-semibold text-sky-300 mb-2">
                        {project.title}
                      </h3>
                      
                      <a
                        href={project.link}
                        target="_blank"
                        className="inline-flex items-center gap-1 text-sky-300 hover:underline text-base"
                      >
                        View GitHub <ArrowRight size={18} />
                      </a>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-sky-500/20 hover:bg-sky-500/40 rounded-full transition"
          >
            <ChevronRight className="text-sky-300 w-6 h-6" />
          </button>
        </div>

        <div className="text-center mt-12">
          <a
            className="px-6 py-3 text-sm font-medium rounded-full border border-sky-400 text-sky-300 hover:bg-sky-400/20 transition-all duration-300 shadow-md shadow-sky-500/20 backdrop-blur-md flex items-center gap-2"
            target="_blank"
            href="https://github.com/kumayl-lokhandwala"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
