    import React, { useState } from "react";
    import { motion } from "framer-motion";

    // --- Skill Categories Data ---
    const skillCategories = [
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

    const getSkillLevel = (percentage) => {
    if (percentage < 50) return "Novice";
    if (percentage < 80) return "Proficient";
    return "Expert";
    };

    const getBarColor = (percentage, categoryGradient) => {
    if (percentage < 50) return "bg-gradient-to-r from-red-500 to-pink-500";
    if (percentage < 80) return "bg-gradient-to-r from-yellow-500 to-amber-500";
    return `bg-gradient-to-r ${categoryGradient}`;
    };

    const SkillCategory = ({ category }) => {
    const icons = {
        "Programming Languages": "💻",
        "Web Technologies": "🌐",
        "Frontend Frameworks": "🎨",
        "Backend Frameworks": "🛠️",
        "Machine Learning": "🤖",
        "Databases": "🗄️",
        "DevOps & Tools": "🔧",
        "Development Areas": "🚀",
    };

    return (
        <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 w-full"
        >
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 break-words break-all">
            <span className="not-gradient-emoji">{icons[category.name]}</span>
            <span className={`bg-clip-text text-transparent bg-gradient-to-r ${category.gradient} break-words break-all`}>
            {category.name}
            </span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {category.skills.map((skill, idx) => (
            <motion.div
                key={idx}
                className="bg-gradient-to-br from-[#1e293b]/80 to-[#0f172a]/90 border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 flex flex-col"
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: idx * 0.08 }}
            >
                <div className="text-gray-200 font-semibold mb-3 text-base">{skill.name}</div>
                <div className="w-full bg-gray-800/60 rounded-full h-4 mb-3 overflow-hidden relative">
                <motion.div
                    className={`h-4 rounded-full ${getBarColor(skill.percentage, category.gradient)}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 90, damping: 15 }}
                />
                <div className="absolute inset-0 h-4 rounded-full bg-gradient-to-r from-transparent to-white/10 animate-pulse" />
                </div>
                <span className="text-xs text-cyan-300 font-bold">{getSkillLevel(skill.percentage)}</span>
            </motion.div>
            ))}
        </div>
        </motion.div>
    );
    };

    const Skills = () => {
    const [selectedCategory, setSelectedCategory] = useState(skillCategories[0].name);

    // Find the max number of skills for sizing on desktop
    const maxSkills = Math.max(...skillCategories.map(c => c.skills.length));
    // Each skill card is about 90px tall + header, padding, etc.
    const desktopMinHeight = `${maxSkills * 90 + 120}px`;

    return (
        <section className="w-full min-h-screen bg-[#0b0f19] text-white font-sans flex flex-col items-center justify-center relative py-8">
        {/* Glow Effects */}
        <div className="absolute inset-0 pointer-events-none blur-3xl opacity-30 z-0 select-none">
            <div className="w-[600px] h-[600px] bg-sky-400/10 absolute -top-40 -left-40 rounded-full" />
            <div className="w-[400px] h-[400px] bg-blue-300/10 absolute bottom-0 right-0 rounded-full" />
        </div>
        <div className="relative z-10 w-full max-w-7xl flex flex-col items-center justify-center px-4 sm:px-8 py-4">
            {/* Header is spaced further down */}
            <h2 className="text-4xl sm:text-5xl font-extrabold text-center mt-8 mb-14 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 select-none tracking-tight">
            <span className="not-gradient-emoji">👾</span> My Skills Arsenal <span className="not-gradient-emoji">👾</span>
            </h2>
            {/* Desktop */}
            <div className="hidden lg:flex w-full items-center justify-center gap-16">
            <motion.div
                className="flex-shrink-0 flex items-center justify-center h-full"
                whileHover={{ rotate: 8, scale: 1.07 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                style={{
                width: 320,
                height: 320,
                minWidth: 180,
                minHeight: 180,
                maxWidth: 340,
                maxHeight: 340,
                }}
            >
                <img
                src="/images/ProjectImage.png"
                alt="Skills Illustration"
                className="block mx-auto my-0 w-full h-full object-cover rounded-3xl shadow-2xl border border-cyan-400/20 bg-[#101828]"
                draggable={false}
                style={{
                    transition: "box-shadow 0.3s",
                }}
                />
            </motion.div>
            <div className="flex-1 flex flex-row gap-12">
                <nav className="w-72 flex-shrink-0">
                <div className="flex flex-col gap-4">
                    {skillCategories.map((category) => (
                    <motion.button
                        key={category.name}
                        className={`flex items-center px-6 py-4 rounded-xl text-lg font-medium transition-all duration-300 ${
                        selectedCategory === category.name
                            ? `bg-sky-500/20 text-sky-300 border border-sky-500/30 shadow-md shadow-sky-400/20`
                            : "text-gray-400 hover:text-gray-200 hover:bg-[#1e293b]/50"
                        } whitespace-nowrap`}
                        onClick={() => setSelectedCategory(category.name)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="not-gradient-emoji mr-3 text-xl">
                        {
                            {
                            "Programming Languages": "💻",
                            "Web Technologies": "🌐",
                            "Frontend Frameworks": "🎨",
                            "Backend Frameworks": "🛠️",
                            "Machine Learning": "🤖",
                            "Databases": "🗄️",
                            "DevOps & Tools": "🔧",
                            "Development Areas": "🚀",
                            }[category.name]
                        }
                        </span>
                        <span>{category.name}</span>
                    </motion.button>
                    ))}
                </div>
                </nav>
                <div className="flex-1" style={{ minHeight: desktopMinHeight }}>
                {skillCategories
                    .filter((category) => category.name === selectedCategory)
                    .map((category) => (
                    <SkillCategory key={category.name} category={category} />
                    ))}
                </div>
            </div>
            </div>
            {/* Mobile: image at top, all skills, no nav, smooth flow */}
            <div
            className="flex flex-col lg:hidden w-full max-w-2xl mx-auto items-center px-2 pb-4"
            >
            <motion.div
                whileHover={{ rotate: -8, scale: 1.07 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="flex items-center justify-center w-full my-6"
                style={{ width: 180, height: 180, maxWidth: "100%" }}
            >
                <img
                src="/images/ProjectImage.png"
                alt="Skills Illustration"
                className="block mx-auto my-0 w-full h-full object-cover rounded-2xl shadow-2xl border border-sky-500/20 bg-[#101828]"
                draggable={false}
                style={{
                    transition: "box-shadow 0.3s",
                }}
                />
            </motion.div>
            {skillCategories.map((category) => (
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
                html, body {
                overflow-x: hidden;
                max-width: 100vw;
                }
                ::-webkit-scrollbar {
                width: 8px;
                }
                ::-webkit-scrollbar-thumb {
                background-color: rgba(56, 189, 248, 0.5);
                border-radius: 4px;
                }
                @keyframes pulse {
                0% { opacity: 0.2; }
                50% { opacity: 0.4; }
                100% { opacity: 0.2; }
                }
                .animate-pulse {
                animation: pulse 2s infinite;
                }
            `}
            </style>
        </div>
        </section>
    );
    };

    export default Skills;
