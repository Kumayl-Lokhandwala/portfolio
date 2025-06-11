import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "X Clone",
    image: "/images/projects/xclone.png",
    link: "https://github.com/yourusername/x-clone",
  },
  {
    title: "Spotify Clone",
    image: "/images/projects/spotifyclone.png",
    link: "https://github.com/yourusername/spotify-clone",
  },
  {
    title: "PixelTube",
    image: "/images/projects/pixeltube.png",
    link: "https://github.com/yourusername/pixeltube",
  },
  {
    title: "BlinkIt Data Analysis",
    image: "/images/projects/blinkit.png",
    link: "https://github.com/yourusername/blinkit-analysis",
  },
  {
    title: "AI Book Recommender",
    image: "/images/projects/bookrecommender.png",
    link: "https://github.com/yourusername/book-recommender",
  },
  {
    title: "Movie Mobile App",
    image: "/images/projects/movieapp.png",
    link: "https://github.com/yourusername/movie-app",
  },
  {
    title: "Campus Ease",
    image: "/images/projects/campusease.png",
    link: "https://github.com/yourusername/campus-ease",
  },
  {
    title: "Comments Toxicity Model",
    image: "/images/projects/toxicity.png",
    link: "https://github.com/yourusername/toxicity-detector",
  },
  {
    title: "FlyEasy - Airport System",
    image: "/images/projects/flyeasy.png",
    link: "https://github.com/yourusername/flyeasy-airport",
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollLeft = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const scrollRight = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const visibleProjects = [
    projects[currentIndex],
    projects[(currentIndex + 1) % projects.length],
    projects[(currentIndex + 2) % projects.length],
  ];

  return (
    <section
      id="projects"
      className="bg-gradient-to-br from-[#0b0f19] via-[#0f172a] to-[#1e293b] text-white px-6 py-24 font-sans"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300 mb-20">
          Featured Builds
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Developer Image */}
          <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/images/ProjectImage.png"
              alt="Kumayl Coding"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Carousel */}
          <div className="relative flex-1 flex items-center w-full max-w-4xl">
            <button
              onClick={scrollLeft}
              className="absolute left-0 z-10 p-3 bg-sky-500/20 hover:bg-sky-500/40 rounded-full"
            >
              <ChevronLeft className="text-sky-300" />
            </button>

            <div className="w-full overflow-hidden">
              <div className="flex transition-transform duration-700 ease-in-out gap-8 justify-center">
                {visibleProjects.map((project, index) => (
                  <a
                    key={index}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-72 rounded-2xl overflow-hidden shadow-xl border border-sky-400/10 hover:border-sky-400/30 backdrop-blur-md bg-[#1e293b]/60 hover:bg-[#1e293b]/80 transition duration-300 hover:scale-[1.02] relative"
                  >
                    <div className="h-44 w-full overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-semibold text-sky-300 mb-1">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-400">View on GitHub ↗</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <button
              onClick={scrollRight}
              className="absolute right-0 z-10 p-3 bg-sky-500/20 hover:bg-sky-500/40 rounded-full"
            >
              <ChevronRight className="text-sky-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
