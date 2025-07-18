import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useSwipeable } from "react-swipeable";
import projectsData from "../data/projectsData";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const [index, setIndex] = useState(3);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const originalItems = projectsData.map((project) => ({
    ...project,
    color: project.color || "from-sky-500 to-cyan-500",
  }));
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
      className="relative bg-gradient-to-br from-[#0b0f19] via-[#0f172a] to-[#1e293b] text-white px-[5%] py-[8%] min-h-screen flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10 blur-3xl"
            style={{
              background: "linear-gradient(120deg, #38bdf8, #0ea5e9)",
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: 15 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="w-full max-w-7xl relative z-10 flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">
              Featured
            </span>{" "}
            <span className="text-primary">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-cyan-400 mx-auto my-4 rounded-full" />
          <p className="text-lg text-sky-200/80 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project was carefully
            crafted with attention to detail, performance, and user experience.
          </p>
        </motion.div>

        <div className="relative w-full max-w-6xl">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-4 bg-sky-900/70 hover:bg-sky-800 backdrop-blur-md border border-sky-500/30 rounded-full transition-all shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 hover:scale-110"
            aria-label="Previous project"
          >
            <ChevronLeft className="text-sky-300 w-6 h-6" />
          </button>

          <div className="overflow-hidden px-2 sm:px-6" {...swipeHandlers}>
            <div
              ref={wrapperRef}
              className="flex"
              style={{
                width: `${(100 / visibleCount) * extendedItems.length}%`,
                transform: `translateX(-${
                  (100 / extendedItems.length) * index
                }%)`,
                transition: transitionEnabled ? "transform 0.6s ease" : "none",
              }}
            >
              {extendedItems.map((project, i) => (
                <div
                  key={i}
                  className="px-4 sm:px-6 py-4"
                  style={{
                    width: `${100 / extendedItems.length}%`,
                    flexShrink: 0,
                  }}
                >
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="group relative h-full"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-cyan-400/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-3xl overflow-hidden shadow-2xl border border-sky-500/20 hover:border-sky-400/40 backdrop-blur-lg bg-[#1e293b]/60 hover:bg-[#1e293b]/80 transition-all duration-500 h-full flex flex-col justify-between"
                    >
                      {/* Gradient border top */}
                      <div
                        className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${project.color} rounded-t-3xl`}
                      />

                      <div className="h-64 w-full overflow-hidden relative">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-transparent to-transparent" />
                      </div>
                      <div className="p-6 pt-4">
                        <h3 className="text-2xl font-bold text-sky-300 mb-2">
                          {project.title}
                        </h3>
                        <p className="text-sky-200/80 mb-4 line-clamp-2">
                          {project.description}
                        </p>
                        <div className="inline-flex items-center gap-1 text-sky-300 group-hover:text-cyan-300 transition-colors">
                          View Project
                          <ArrowRight
                            size={18}
                            className="transition-transform group-hover:translate-x-1"
                          />
                        </div>
                      </div>
                    </a>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-4 bg-sky-900/70 hover:bg-sky-800 backdrop-blur-md border border-sky-500/30 rounded-full transition-all shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 hover:scale-110"
            aria-label="Next project"
          >
            <ChevronRight className="text-sky-300 w-6 h-6" />
          </button>
        </div>

        {/* Pagination indicators */}
        <div className="flex justify-center mt-10 space-x-2">
          {originalItems
            .slice(
              0,
              visibleCount === 1
                ? totalItems
                : Math.ceil(totalItems / visibleCount)
            )
            .map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i * visibleCount + visibleCount)}
                className={`w-3 h-3 rounded-full transition-all ${
                  Math.floor((index - visibleCount) / visibleCount) === i
                    ? "bg-cyan-400 w-6"
                    : "bg-sky-700"
                }`}
                aria-label={`Go to project set ${i + 1}`}
              />
            ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            className="px-8 py-4 text-base font-medium rounded-full border border-sky-400/60 text-sky-300 hover:text-white hover:bg-sky-400/10 transition-all duration-300 shadow-lg shadow-sky-500/20 backdrop-blur-xl hover:shadow-sky-500/40 flex items-center gap-2 group"
            target="_blank"
            href="https://github.com/kumayl-lokhandwala"
          >
            Explore More on GitHub
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
