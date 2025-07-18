import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
  scrollRef: React.RefObject<HTMLDivElement | null>;
}

const Navbar: React.FC<NavbarProps> = ({ scrollRef }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = scrollRef.current?.scrollTop || 0;
      setVisible(scrollTop > window.innerHeight * 0.7);
    };

    const container = scrollRef.current;
    container?.addEventListener("scroll", handleScroll);
    return () => container?.removeEventListener("scroll", handleScroll);
  }, [scrollRef]);

  return (
    <div
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
        visible
          ? "opacity-100 scale-100"
          : "opacity-0 scale-95 pointer-events-none"
      }`}
    >
      <nav className="bg-[#0f172a]/90 border border-sky-500/30 backdrop-blur-xl shadow-lg rounded-full px-6 py-3 flex items-center space-x-6 text-sm sm:text-base text-gray-300 font-medium">
        <a href="#hero" className="hover:text-sky-400 transition">
          Home
        </a>
        <a href="#experience" className="hover:text-sky-400 transition">
          Experience
        </a>
        <a href="#projects" className="hover:text-sky-400 transition">
          Projects
        </a>
        <a href="#skills" className="hover:text-sky-400 transition">
          Skills
        </a>
        <a href="#contact" className="hover:text-sky-400 transition">
          Contact
        </a>
        <Link
          to="/resume"
          className="..."
          onClick={() => window.scrollTo(0, 0)} // Scroll to top when switching to resume
        >
          Resume
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
