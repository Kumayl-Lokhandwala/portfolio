import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Skill {
  name: string;
  percentage: number;
}

interface SkillCategoryType {
  name: string;
  color: string;
  gradient: string;
  skills: Skill[];
}

const icons: Record<string, string> = {
  "Programming Languages": "💻",
  "Web Technologies": "🌐",
  "Frontend Frameworks": "🎨",
  "Backend Frameworks": "🛠️",
  "Machine Learning": "🤖",
  Databases: "🗄️",
  "DevOps & Tools": "🔧",
  "Development Areas": "🚀",
};

const skillCategories: SkillCategoryType[] = [
  // ... (your existing categories data)
  {
    name: "Programming Languages",
    color: "sky",
    gradient: "from-sky-400 to-cyan-300",
    skills: [
      { name: "TypeScript", percentage: 85 },
      { name: "JavaScript", percentage: 90 },
      { name: "Python", percentage: 80 },
      { name: "C", percentage: 70 },
      { name: "C++", percentage: 75 },
      { name: "Java", percentage: 70 },
    ],
  },
  {
    name: "Web Technologies",
    color: "sky",
    gradient: "from-sky-400 to-cyan-300",
    skills: [
      { name: "HTML", percentage: 95 },
      { name: "CSS", percentage: 85 },
      { name: "SQL", percentage: 80 },
    ],
  },
  {
    name: "Frontend Frameworks",
    color: "sky",
    gradient: "from-sky-400 to-cyan-300",
    skills: [
      { name: "ReactJS", percentage: 90 },
      { name: "Next.js", percentage: 85 },
      { name: "Bootstrap", percentage: 80 },
      { name: "React Native", percentage: 90 },
      { name: "Material UI", percentage: 75 },
      { name: "Shadcn UI", percentage: 70 },
      { name: "Ant Design", percentage: 70 },
      { name: "Tailwind CSS", percentage: 85 },
      { name: "Redux", percentage: 80 },
      { name: "jQuery", percentage: 75 },
      { name: "Chart.js", percentage: 70 },
    ],
  },
  {
    name: "Backend Frameworks",
    color: "sky",
    gradient: "from-sky-400 to-cyan-300",
    skills: [
      { name: "Express", percentage: 85 },
      { name: "Node.js", percentage: 85 },
    ],
  },
  {
    name: "Machine Learning",
    color: "sky",
    gradient: "from-sky-400 to-cyan-300",
    skills: [
      { name: "TensorFlow", percentage: 75 },
      { name: "PyTorch", percentage: 70 },
    ],
  },
  {
    name: "Databases",
    color: "sky",
    gradient: "from-sky-400 to-cyan-300",
    skills: [
      { name: "MongoDB", percentage: 80 },
      { name: "MySQL", percentage: 75 },
      { name: "Prisma", percentage: 70 },
      { name: "PostgreSQL", percentage: 75 },
    ],
  },
  {
    name: "DevOps & Tools",
    color: "sky",
    gradient: "from-sky-400 to-cyan-300",
    skills: [
      { name: "AWS", percentage: 70 },
      { name: "GraphQL", percentage: 75 },
      { name: "Firebase", percentage: 70 },
      { name: "Figma", percentage: 80 },
      { name: "Git", percentage: 90 },
      { name: "Docker", percentage: 75 },
    ],
  },
  {
    name: "Development Areas",
    color: "sky",
    gradient: "from-sky-400 to-cyan-300",
    skills: [
      { name: "Software Development", percentage: 85 },
      { name: "MERN stack development", percentage: 85 },
      { name: "Machine Learning", percentage: 75 },
      { name: "DevOps", percentage: 70 },
      { name: "App Development", percentage: 80 },
    ],
  },
];

const getSkillLevel = (percentage: number): string => {
  if (percentage < 50) return "Novice";
  if (percentage < 80) return "Proficient";
  return "Expert";
};

const getBarColor = (percentage: number, categoryGradient: string): string => {
  if (percentage < 50) return "bg-gradient-to-r from-red-500 to-pink-500";
  if (percentage < 80) return "bg-gradient-to-r from-yellow-500 to-amber-500";
  return `bg-gradient-to-r ${categoryGradient}`;
};

interface SkillCategoryProps {
  category: SkillCategoryType;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ category }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-12 w-full"
    >
      <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
        <span className="not-gradient-emoji">{icons[category.name]}</span>
        <span
          className={`bg-clip-text text-transparent bg-gradient-to-r ${category.gradient}`}
        >
          {category.name}
        </span>
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {category.skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="bg-gradient-to-br from-[#1e293b]/80 to-[#0f172a]/90 border border-white/10 rounded-2xl p-5 shadow-xl hover:shadow-cyan-400/20 transition-all duration-300 flex flex-col backdrop-blur-sm"
            whileHover={{
              scale: 1.03,
              boxShadow: "0 10px 30px rgba(56, 189, 248, 0.2)",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: idx * 0.08 }}
          >
            <div className="flex justify-between items-start mb-3">
              <div className="text-gray-200 font-semibold text-base">
                {skill.name}
              </div>
            </div>

            <div className="w-full bg-gray-800/60 rounded-full h-2.5 mb-2 overflow-hidden relative">
              <motion.div
                className={`h-2.5 rounded-full ${getBarColor(
                  skill.percentage,
                  category.gradient
                )}`}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.percentage}%` }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 90, damping: 15 }}
              />
            </div>

            <div className="flex justify-between">
              <span className="text-xs text-gray-400 font-medium">
                {getSkillLevel(skill.percentage)}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    skillCategories[0].name
  );
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section
      id="skills"
      className="w-full min-h-screen bg-[#0b0f19] text-white font-sans flex flex-col items-center justify-center relative py-16 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10 blur-3xl"
            style={{
              background: "linear-gradient(120deg, #38bdf8, #0ea5e9)",
              width: `${Math.random() * 400 + 100}px`,
              height: `${Math.random() * 400 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center px-4 sm:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Tech Stack
            </span>{" "}
            <span className="text-primary">& Toolbox</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto my-4 rounded-full" />
          <p className="text-lg text-sky-200/80 max-w-2xl mx-auto">
            A showcase of my technical skills and proficiencies, honed through
            practice and innovation.
          </p>
        </motion.div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex w-full items-start justify-center gap-8 xl:gap-16">
          {/* Category Navigation */}
          <motion.div
            className="flex-shrink-0 sticky top-32 self-start"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col gap-3 p-4 rounded-2xl backdrop-blur-lg bg-[#0f172a]/30 border border-sky-500/20">
              {skillCategories.map((category) => (
                <motion.button
                  key={category.name}
                  className={`flex items-center px-6 py-4 rounded-xl text-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.name
                      ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg shadow-sky-500/20`
                      : "text-gray-400 hover:text-gray-200 hover:bg-[#1e293b]/50"
                  } whitespace-nowrap min-w-[250px]`}
                  onClick={() => setSelectedCategory(category.name)}
                  whileHover={{
                    scale: 1.03,
                    backgroundColor:
                      selectedCategory !== category.name
                        ? "rgba(30, 41, 59, 0.7)"
                        : undefined,
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="not-gradient-emoji mr-3 text-2xl">
                    {icons[category.name]}
                  </span>
                  <span>{category.name}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Content Area */}
          <motion.div
            className="flex-1 rounded-3xl backdrop-blur-xl bg-[#0f172a]/30 border border-sky-500/20 p-8 overflow-hidden"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {skillCategories
                  .filter((category) => category.name === selectedCategory)
                  .map((category) => (
                    <SkillCategory key={category.name} category={category} />
                  ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Mobile Layout */}
        <div className="flex flex-col lg:hidden w-full max-w-full mx-auto items-center px-2 pb-4">
          <div className="w-full mb-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {skillCategories.map((category) => (
                <motion.button
                  key={category.name}
                  className={`flex flex-col items-center justify-center p-3 rounded-xl text-sm font-medium transition-all ${
                    selectedCategory === category.name
                      ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg shadow-sky-500/20`
                      : "text-gray-400 hover:text-gray-200 bg-[#1e293b]/50"
                  }`}
                  onClick={() => setSelectedCategory(category.name)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="not-gradient-emoji text-2xl mb-1">
                    {icons[category.name]}
                  </span>
                  <span className="text-center text-xs">{category.name}</span>
                </motion.button>
              ))}
            </div>
          </div>

          {skillCategories
            .filter((category) => category.name === selectedCategory)
            .map((category) => (
              <SkillCategory key={category.name} category={category} />
            ))}
        </div>

        <style>
          {`
            .not-gradient-emoji {
              background: none !important;
              color: inherit !important;
              filter: none !important;
              font-variant-emoji: emoji;
            }
          `}
        </style>
      </div>
    </section>
  );
};

export default Skills;
