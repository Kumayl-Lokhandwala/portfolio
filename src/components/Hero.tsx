import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const fullText = "Kumayl Lokhandwala";
  const [typedText, setTypedText] = useState("");
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(typingInterval);
        // Show buttons after typing animation completes
        setTimeout(() => setShowButtons(true), 300);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="min-h-[100vh] w-full flex items-center justify-center bg-gradient-to-br from-[#0b0f19] via-[#0f172a] to-[#1e293b] text-white px-[5%] py-[6%] font-sans antialiased overflow-hidden relative">
      {/* Soft radial background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.08)_0%,_transparent_70%)] opacity-50" />

      {/* Floating animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-sky-400 opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              animation: `float ${
                Math.random() * 10 + 10
              }s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="w-full max-w-[1440px] flex flex-col lg:flex-row items-center justify-between gap-y-16 lg:gap-x-[5%] relative z-10">
        {/* Left - Text */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <div className="overflow-hidden">
            <h1 className="text-[7vw] sm:text-[5vw] md:text-[4.5vw] lg:text-[3.5vw] font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-cyan-300 min-h-[3.5rem]">
              {typedText}
              <span
                className={`inline-block h-[1em] w-[0.1em] bg-sky-400 ml-1 ${
                  typedText.length === fullText.length ? "animate-pulse" : ""
                }`}
              ></span>
            </h1>
          </div>

          <p className="text-[3.5vw] sm:text-[2.5vw] md:text-[1.7vw] lg:text-[1.2vw] text-gray-300 leading-relaxed max-w-[90%] lg:max-w-[90%] mx-auto lg:mx-0">
            Full-stack software engineer passionate about clean architecture,
            solving real-world problems, and building scalable systems — from
            elegant UIs and robust APIs to ML and DevOps.
          </p>

          <p className="text-sky-300 font-medium text-[3vw] sm:text-[2vw] md:text-[1.3vw]">
            Open to full-time roles in software engineering, machine learning,
            or DevOps.
          </p>

          <div
            className={`mt-[3%] flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-700 ${
              showButtons
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <a
              href="#contact"
              className="px-6 py-3 text-sm sm:text-base bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Get in Touch
            </a>

            <Link
              to="/resume"
              className="px-6 py-3 text-sm sm:text-base bg-transparent border-2 border-sky-500 hover:bg-sky-500/10 text-sky-300 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              View Resume
            </Link>
          </div>
        </div>

        {/* Right - Image */}
        <div className="flex-1 flex justify-center items-center w-full">
          <div className="relative w-[85%] max-w-[420px] aspect-[6/9] rounded-2xl group">
            <div className="absolute inset-0 rounded-2xl blur-2xl bg-sky-400/20 scale-105 z-0 group-hover:bg-sky-400/30 transition-all duration-500" />
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-sky-500/20 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-cyan-400/5 z-10" />
              <img
                src="/images/HeroImage.png"
                alt="Developer illustration"
                className="w-full h-full object-contain -translate-y-[2%] transition-transform duration-500 group-hover:-translate-y-0"
              />
              <span className="sr-only">Developer illustration</span>

              {/* Animated pulse effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-sky-500/30 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-sky-600 text-white px-3 py-1 rounded-full font-medium text-sm shadow-lg z-20 group-hover:-rotate-6 transition-transform duration-500">
              <span>Full Stack</span>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-cyan-500 text-white px-3 py-1 rounded-full font-medium text-sm shadow-lg z-20 group-hover:rotate-6 transition-transform duration-500">
              <span>AI/ML</span>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-15px);
          }
          75% {
            transform: translateY(15px) translateX(8px);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
