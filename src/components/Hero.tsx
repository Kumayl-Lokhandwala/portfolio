import { useEffect, useState } from "react";

const Hero = () => {
  const fullText = "Kumayl Lokhandwala";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-[100vh] w-full flex items-center justify-center bg-gradient-to-br from-[#0b0f19] via-[#0f172a] to-[#1e293b] text-white px-[5%] py-[6%] font-sans antialiased overflow-hidden relative">
      {/* Soft radial background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.08)_0%,_transparent_70%)] opacity-50" />

      <div className="w-full max-w-[1440px] flex flex-col lg:flex-row items-center justify-between gap-y-16 lg:gap-x-[5%] relative z-10">
        {/* Left - Text */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <h1 className="text-[7vw] sm:text-[5vw] md:text-[4.5vw] lg:text-[3.5vw] font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-cyan-300 min-h-[3.5rem]">
            {typedText}
          </h1>

          <p className="text-[3.5vw] sm:text-[2.5vw] md:text-[1.7vw] lg:text-[1.2vw] text-gray-300 leading-relaxed max-w-[90%] lg:max-w-[90%] mx-auto lg:mx-0">
            Full-stack software engineer passionate about clean architecture, solving real-world problems, and building scalable systems — from elegant UIs and robust APIs to ML and DevOps.
          </p>

          <p className="text-sky-300 font-medium text-[3vw] sm:text-[2vw] md:text-[1.3vw]">
            Open to full-time roles in software engineering, machine learning, or DevOps.
          </p>

          <a
            href="#contact"
            className="inline-block mt-[3%] px-[6%] py-[2.5%] text-[1.1rem] sm:text-[1.2rem] bg-sky-500 text-white font-semibold rounded-lg shadow-md hover:bg-sky-600 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>

        {/* Right - Image */}
        <div className="flex-1 flex justify-center items-center w-full">
          <div className="relative w-[85%] max-w-[420px] aspect-[6/9] rounded-2xl">
            <div className="absolute inset-0 rounded-2xl blur-2xl bg-sky-400/20 scale-105 z-0" />
            <div className="relative z-10 rounded-2xl overflow-hidden">
              <img
                src="/images/HeroImage.png"
                alt="Developer illustration"
                className="w-full h-full object-contain -translate-y-[2%]"
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
