import React from "react";
import { motion, type Variants } from "framer-motion";

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
  // Correctly typed animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const lineVariants: Variants = {
    hidden: { height: 0 },
    visible: {
      height: "100%",
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1] as const
      }
    }
  };

  const dotVariants: Variants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 12
      }
    }
  };

  return (
    <section className="relative bg-[#0b0f19] text-white px-4 sm:px-6 pt-20 pb-32 font-sans overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-cyan-300"
        >
          My Developer Journey
        </motion.h2>

        <motion.div 
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Vertical timeline line */}
          <motion.div 
            className="hidden sm:block absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-sky-400/40 to-cyan-400/10 transform -translate-x-1/2 pointer-events-none"
            variants={lineVariants}
          />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isLeft ? "sm:justify-start" : "sm:justify-end"
                  } group`}
                  variants={itemVariants}
                >
                  {/* Timeline dot */}
                  <motion.div 
                    className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 bg-sky-400 w-[14px] h-[14px] rounded-full z-10 shadow-md"
                    variants={dotVariants}
                    whileHover={{ scale: 1.3 }}
                  />

                  {/* Experience card */}
                  <motion.div
                    className={`w-[90%] sm:max-w-[48%] bg-gradient-to-br from-[#1e293b]/80 to-[#0f172a]/90 border border-sky-500/20 rounded-xl p-5 sm:p-6 shadow-md hover:shadow-sky-400/30 transition-all duration-300 ${
                      isLeft ? "sm:pr-[4%]" : "sm:pl-[4%]"
                    }`}
                    whileHover={{ 
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(56, 189, 248, 0.3)"
                    }}
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
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: 10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * i, duration: 0.3 }}
                          viewport={{ once: true }}
                        >
                          {point}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;