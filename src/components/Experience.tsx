  import React from "react";

  const experiences = [
    {
      title: "Frontend Intern",
      company: "Zype – Respo Financial Capital Pvt Ltd",
      duration: "May 2025 – Present",
      points: [
        "Built mobile apps with React Native & Expo.",
        "Integrated RESTful APIs and managed async state.",
        "Designed modular UIs with hooks and navigation.",
      ],
    },
    {
      title: "AI-ML Intern",
      company: "Collab Junction",
      duration: "June 2024 – Dec 2024",
      points: [
        "Trained ML models in TensorFlow and Scikit-learn.",
        "Developed scrapers using BeautifulSoup and Scrapy.",
        "Built an NLP chatbot for automated support.",
      ],
    },
    {
      title: "Decision Science Intern",
      company: "CASHe – Bhanix Finance India Pvt Ltd",
      duration: "Dec 2023 – Jan 2024",
      points: [
        "Performed data analysis with NumPy, Pandas, Seaborn.",
        "Visualized trends using Matplotlib.",
        "Drove insights for financial decision-making.",
      ],
    },
  ];

  const Experience = () => {
    return (
      <section className="relative bg-[#0b0f19] text-white px-4 sm:px-6 pt-20 pb-32 font-sans overflow-x-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-cyan-300">
My Developer Journey          </h2>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="hidden sm:block absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-sky-400/40 to-cyan-400/10 transform -translate-x-1/2 pointer-events-none" />

            <div className="flex flex-col gap-12">
              {experiences.map((exp, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className={`relative flex flex-col sm:flex-row items-center ${
                      isLeft ? "sm:justify-start" : "sm:justify-end"
                    } group`}
                  >
                    {/* Timeline dot */}
                    <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 bg-sky-400 w-[14px] h-[14px] rounded-full z-10 shadow-md" />

                    {/* Experience card */}
                    <div
                      className={`w-[90%] sm:max-w-[48%] bg-gradient-to-br from-[#1e293b]/80 to-[#0f172a]/90 border border-sky-500/20 rounded-xl p-5 sm:p-6 shadow-md hover:shadow-sky-400/30 transition-all duration-300 ${
                        isLeft ? "sm:pr-[4%]" : "sm:pl-[4%]"
                      }`}
                    >
                      <h3 className="text-lg sm:text-xl font-semibold text-cyan-300">
                        {exp.title}
                      </h3>
                      <p className="text-gray-400 text-sm sm:text-base">
                        {exp.company}
                      </p>
                      <p className="text-sky-300 text-sm font-mono mt-1">
                        {exp.duration}
                      </p>
                      <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base mt-3 space-y-1.5">
                        {exp.points.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default Experience;
