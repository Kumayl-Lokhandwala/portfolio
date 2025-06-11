import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0b0f19] via-[#0f172a] to-[#1e293b] text-white px-4 sm:px-6 py-12 sm:py-16 font-sans antialiased overflow-hidden relative">
      {/* Soft radial background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.08)_0%,_transparent_70%)] opacity-50" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-20 relative z-10">
        {/* Left - Text Section */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-cyan-300">
            Kumayl Lokhandwala
          </h1>

          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Full-stack software engineer passionate about clean architecture, solving real-world problems, and building scalable systems — from elegant UIs and robust APIs to ML and DevOps.
          </p>

          <p className="text-sky-300 font-medium text-base sm:text-lg xl:text-xl">
            Open to full-time roles in software engineering, machine learning, or DevOps.
          </p>

          <a
            href="#contact"
            aria-label="Contact Kumayl Lokhandwala"
            className="inline-block mt-4 px-6 py-3 text-base sm:text-lg bg-sky-500 text-white font-semibold rounded-lg shadow-md hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>

        {/* Right - Hero Image */}
        <div className="flex-1 flex justify-center w-full mt-8 lg:mt-0">
          <div className="relative w-[300px] h-[460px] sm:w-[360px] sm:h-[540px] lg:w-[420px] lg:h-[600px] xl:w-[480px] xl:h-[680px] rounded-2xl">
            <div className="absolute inset-0 rounded-2xl blur-2xl bg-sky-400/20 scale-105 z-0" />
            <div className="relative z-10 rounded-2xl">
              <img
                src="/images/HeroImage.png"
                alt="Developer illustration"
                className="w-full h-full object-contain -translate-y-2"
              />
              <span className="sr-only">Developer illustration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
