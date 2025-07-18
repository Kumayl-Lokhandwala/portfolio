import { motion, type Variants } from "framer-motion";
import { Rocket, Cpu, BarChart } from "lucide-react";

const experiences = [
  {
    title: "Frontend Intern",
    company: "Zype – Respo Financial Capital Pvt Ltd",
    duration: "May 2025 – July 2025",
    points: [
      "Built responsive UPI frontend with React Native",
      "Integrated Ollama-based AI workflows",
      "Developed RAG systems for smart document search",
      "Optimized app using Axios, AsyncStorage, and Expo",
    ],
    icon: <Rocket className="h-6 w-6" />,
    color: "from-sky-500 to-cyan-400",
    skills: ["React Native", "AI Integration", "RAG", "Expo"],
  },
  {
    title: "AI-ML Intern",
    company: "Collab Junction",
    duration: "June 2024 – Dec 2024",
    points: [
      "Trained ML models in TensorFlow and Scikit-learn",
      "Developed scrapers using BeautifulSoup and Scrapy",
      "Built an NLP chatbot for automated support",
    ],
    icon: <Cpu className="h-6 w-6" />,
    color: "from-purple-500 to-indigo-400",
    skills: ["TensorFlow", "Scikit-learn", "NLP", "Scrapy"],
  },
  {
    title: "Decision Science Intern",
    company: "CASHe – Bhanix Finance India Pvt Ltd",
    duration: "Dec 2023 – Jan 2024",
    points: [
      "Performed data analysis with NumPy, Pandas, Seaborn",
      "Visualized trends using Matplotlib",
      "Drove insights for financial decision-making",
    ],
    icon: <BarChart className="h-6 w-6" />,
    color: "from-amber-500 to-orange-400",
    skills: ["Data Analysis", "Pandas", "Matplotlib", "Finance"],
  },
];

const Experience = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants: Variants = {
    hover: {
      y: -10,
      boxShadow: "0 20px 50px -15px rgba(56, 189, 248, 0.3)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <section className="relative bg-[#0b0f19] text-white px-4 sm:px-6 pt-20 pb-32 font-sans overflow-x-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-[10%] w-64 h-64 bg-sky-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-40 right-[15%] w-80 h-80 bg-purple-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-4xl h-64 bg-cyan-500/5 rounded-full blur-[80px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-cyan-300">
            Where I've Worked & What I've Built
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-400 text-lg">
            From financial tech to AI startups, I've contributed to impactful
            projects while refining my skills.
          </p>
        </motion.div>

        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Vertical timeline line */}
          <div className="hidden sm:block absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-sky-400/20 via-cyan-400/20 to-purple-400/20 transform -translate-x-1/2 pointer-events-none"></div>

          <div className="flex flex-col gap-16">
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
                  <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className="relative">
                      <div className="absolute inset-0 bg-sky-400 rounded-full animate-ping opacity-20"></div>
                      <div
                        className={`w-5 h-5 rounded-full bg-gradient-to-br ${exp.color} shadow-md flex items-center justify-center`}
                      >
                        {exp.icon}
                      </div>
                    </div>
                  </div>

                  {/* Experience card */}
                  <motion.div
                    className={`w-full sm:max-w-[48%] bg-gradient-to-br from-[#1e293b]/80 to-[#0f172a]/90 border border-sky-500/20 rounded-2xl p-6 shadow-xl overflow-hidden relative ${
                      isLeft ? "sm:pr-[4%]" : "sm:pl-[4%]"
                    }`}
                    variants={cardVariants}
                    whileHover="hover"
                  >
                    {/* Gradient Border Top */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${exp.color} rounded-t-2xl`}
                    ></div>

                    <div className="flex items-start gap-4">
                      <div
                        className={`p-2 rounded-lg bg-gradient-to-br ${exp.color}`}
                      >
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {exp.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 mt-1">
                          <span className="text-gray-400">{exp.company}</span>
                          <span className="text-sky-300 text-xs font-mono px-2 py-1 bg-sky-900/30 rounded">
                            {exp.duration}
                          </span>
                        </div>
                      </div>
                    </div>

                    <ul className="mt-6 space-y-3">
                      {exp.points.map((point, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start"
                          initial={{ opacity: 0, x: 10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * i, duration: 0.3 }}
                          viewport={{ once: true }}
                        >
                          <div className="flex-shrink-0 mt-1 mr-3 text-sky-400">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <span className="text-gray-300">{point}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <div className="mt-6 flex gap-2 flex-wrap">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-medium bg-sky-900/30 text-sky-300 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
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
