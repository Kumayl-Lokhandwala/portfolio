// src/components/Resume.js
import { useState, useEffect } from "react";

const Resume = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-black text-gray-200">
      {/* Header with animated profile */}

      <header
        className={`transition-all duration-1000 transform ${
          isMounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div className="flex items-center gap-6">
            <div className="relative">
              {/* Replace this with your photo */}
              <img
                src="/images/photo.jpg" // Update this path
                alt="Kumayl Lokhandwala"
                className="w-24 h-24 md:w-32 md:h-32 rounded-xl object-cover border-2 border-blue-500"
              />
              {/* Keep the verification badge if you want */}
              <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm7-10a1 1 0 10-2 0v2h-2a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Kumayl Lokhandwala
              </h1>
              <p className="text-blue-400 mt-2">
                Software Engineer | Full Stack Development | AI/ML
              </p>
              <div className="flex items-center gap-2 mt-3">
                <span className="px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-sm">
                  VIT Vellore
                </span>
                <span className="px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-sm">
                  CGPA: 9.01/10
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end">
            <div className="flex gap-3">
              <a
                href="mailto:kumayllokhandwala04@gmail.com"
                className="p-3 bg-gray-900 hover:bg-blue-900 rounded-full transition-all border border-blue-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
              <a
                href="tel:+919004372229"
                className="p-3 bg-gray-900 hover:bg-blue-900 rounded-full transition-all border border-blue-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </a>
              <a
                href="https://github.com/kumayl-lokhandwala"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-900 hover:bg-blue-900 rounded-full transition-all border border-blue-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/kumayl-lokhandwala"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-900 hover:bg-blue-900 rounded-full transition-all border border-blue-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>

            <button className="mt-8 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-medium py-3 px-6 rounded-full flex items-center gap-2 transition-all transform hover:-translate-y-1 shadow-lg">
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
              <a href="/papers/resume.pdf" download className="...">
                Download Resume
              </a>
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="mb-10">
        <div className="flex flex-wrap gap-2 md:gap-4 border-b border-blue-800 pb-2">
          {[
            "about",
            "experience",
            "education",
            "skills",
            "projects",
            "publications",
          ].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-lg font-medium capitalize transition-all ${
                activeTab === tab
                  ? "bg-blue-700 text-white shadow-lg"
                  : "text-blue-300 hover:bg-gray-900"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content Sections */}
      <div
        className={`transition-all duration-500 ${
          isMounted ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* About Section */}
        {activeTab === "about" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-gray-900 rounded-2xl p-6 border border-blue-800">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                About Me
              </h2>
              <p className="text-blue-300 leading-relaxed">
                Computer Science student at VIT Vellore with hands-on experience
                in full-stack development and AI/ML. Proficient in React,
                Node.js, TensorFlow, and AWS. Passionate about building scalable
                solutions and solving complex problems through clean, efficient
                code.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-900 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-blue-400 text-sm">Location</p>
                    <p className="text-white font-medium">
                      Vellore, Tamil Nadu
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-900 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-blue-400 text-sm">Degree</p>
                    <p className="text-white font-medium">
                      B. Tech Computer Science
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-900 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-blue-400 text-sm">Graduation</p>
                    <p className="text-white font-medium">
                      June 2026 (Expected)
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-900 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-blue-400 text-sm">Expertise</p>
                    <p className="text-white font-medium">Full Stack & AI/ML</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl p-6 border border-blue-800">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                Skills Overview
              </h2>

              <div className="space-y-4">
                {[
                  {
                    name: "Frontend",
                    value: 90,
                    color: "from-blue-500 to-blue-600",
                  },
                  {
                    name: "Backend",
                    value: 85,
                    color: "from-blue-600 to-blue-700",
                  },
                  {
                    name: "AI/ML",
                    value: 80,
                    color: "from-blue-700 to-blue-800",
                  },
                  {
                    name: "Cloud/DevOps",
                    value: 75,
                    color: "from-blue-400 to-blue-600",
                  },
                ].map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-blue-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-blue-400">{skill.value}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2.5">
                      <div
                        className={`h-2.5 rounded-full bg-gradient-to-r ${skill.color}`}
                        style={{ width: `${skill.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-medium text-white mb-3">
                  Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "TypeScript",
                    "JavaScript",
                    "Python",
                    "C++",
                    "Java",
                    "SQL",
                  ].map((lang, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-sm"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Experience Section */}
        {activeTab === "experience" && (
          <div className="space-y-6">
            <ExperienceCard
              title="Frontend Developer Intern"
              company="Zype – Respo Financial Pvt Ltd"
              period="2023 - Present"
              achievements={[
                "Contributed to building the UPI frontend using React Native, improving mobile responsiveness by 35% and reducing UI-related issues by 40%",
                "Designed and implemented Ollama-based MCP applications, automating AI workflows and cutting manual intervention by 60%",
                "Independently developed RAG systems, enabling document queries with 90%+ contextual accuracy",
                "Optimized data handling and app performance using Axios, AsyncStorage, and Expo, decreasing load time by 25%",
              ]}
              tech={["React Native", "Ollama", "RAG", "Axios", "Expo"]}
            />

            <ExperienceCard
              title="AI-ML Intern"
              company="Collab Junction"
              period="2022 - 2023"
              achievements={[
                "Developed ML models using Python, TensorFlow, and Scikit-learn, improving recommendation accuracy by 20%",
                "Built custom scraping tools with BeautifulSoup and Scrapy, cutting data collection time by 50%",
                "Created an NLP-based chatbot, reducing average customer response time by 30%",
              ]}
              tech={[
                "Python",
                "TensorFlow",
                "Scikit-learn",
                "NLP",
                "BeautifulSoup",
              ]}
            />

            <ExperienceCard
              title="Decision Science Intern"
              company="CASHe – Bhanix Finance Pvt Ltd"
              period="2022"
              achievements={[
                "Utilized NumPy, Pandas, Seaborn, and Matplotlib for data analysis, increasing reporting efficiency by 45%",
                "Applied statistical techniques to structured datasets, leading to 30% faster insight generation",
                "Created visual reports highlighting trends and patterns, helping reduce turnaround time by 25%",
              ]}
              tech={[
                "Python",
                "Pandas",
                "NumPy",
                "Data Visualization",
                "Statistics",
              ]}
            />
          </div>
        )}

        {/* Education Section */}
        {activeTab === "education" && (
          <div className="bg-gray-900 rounded-2xl p-6 border border-blue-800">
            <div className="flex items-start gap-6">
              <div className="bg-blue-900 p-4 rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">VIT Vellore</h2>
                <p className="text-blue-400 mt-1">
                  Bachelor of Technology - Computer Science and Engineering
                </p>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-blue-400 text-sm">Duration</p>
                    <p className="text-white font-medium">
                      2022 – June 2026 (Expected)
                    </p>
                  </div>

                  <div>
                    <p className="text-blue-400 text-sm">CGPA</p>
                    <p className="text-white font-medium">9.01 / 10.0</p>
                  </div>

                  <div>
                    <p className="text-blue-400 text-sm">Relevant Coursework</p>
                    <p className="text-white font-medium">
                      Data Structures, Algorithms, Deep Learning, NLP
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-medium text-white mb-3">
                    Achievements
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="mt-1 mr-2 text-blue-400">
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
                      <span className="text-blue-300">
                        Published research paper in IEEE ICDCC 2024
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-2 text-blue-400">
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
                      <span className="text-blue-300">
                        Created end-to-end web platforms
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-2 text-blue-400">
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
                      <span className="text-blue-300">
                        Designed and deployed AI tools.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Skills Section */}
        {activeTab === "skills" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-2xl p-6 border border-blue-800">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
                Technical Skills
              </h2>

              <div className="space-y-6">
                {[
                  {
                    category: "Frontend Development",
                    skills: [
                      "React.js",
                      "Next.js",
                      "React Native",
                      "Redux",
                      "Tailwind CSS",
                      "Bootstrap",
                      "Material-UI",
                    ],
                  },
                  {
                    category: "Backend Development",
                    skills: [
                      "Node.js",
                      "Express.js",
                      "GraphQL",
                      "REST APIs",
                      "MongoDB",
                      "PostgreSQL",
                      "AWS (S3, Lambda, EC2)",
                    ],
                  },
                  {
                    category: "Machine Learning & AI",
                    skills: [
                      "TensorFlow",
                      "PyTorch",
                      "Scikit-Learn",
                      "NLP (Hugging Face)",
                      "Deep Learning",
                      "LLMs",
                      "Computer Vision",
                    ],
                  },
                  {
                    category: "Tools & Platforms",
                    skills: [
                      "Git",
                      "Github",
                      "Postman",
                      "Figma",
                      "Linux",
                      "VS Code",
                      "Docker",
                    ],
                  },
                ].map((group, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-medium text-blue-400 mb-3">
                      {group.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-blue-900 text-blue-300 rounded-full flex items-center"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-1 text-blue-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl p-6 border border-blue-800">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                Professional Skills
              </h2>

              <div className="space-y-6">
                {[
                  { name: "Problem Solving", level: 95 },
                  { name: "Algorithm Design", level: 90 },
                  { name: "System Architecture", level: 85 },
                  { name: "Performance Optimization", level: 88 },
                  { name: "Technical Communication", level: 92 },
                ].map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-blue-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2.5">
                      <div
                        className="h-2.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-700"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Soft Skills
                </h2>

                <div className="flex flex-wrap gap-2">
                  {[
                    "Team Leadership",
                    "Project Management",
                    "Critical Thinking",
                    "Adaptability",
                    "Time Management",
                    "Mentoring",
                    "Presentation Skills",
                  ].map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-blue-900 text-blue-300 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Projects Section */}
        {activeTab === "projects" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
              title="PixelTube - Video Sharing Platform"
              description="A responsive video-sharing platform similar to YouTube with smooth playback and content management"
              technologies={[
                "React",
                "Material-UI",
                "Node.js",
                "MongoDB",
                "FFmpeg",
              ]}
              features={[
                "Intuitive UI with reusable components",
                "Efficient data handling and streaming logic",
                "User authentication and content management",
                "Responsive design across all devices",
              ]}
              demoLink="https://pixel-tube.vercel.app/"
              sourceCodeLink="https://github.com/Kumayl-Lokhandwala/PixelTube"
            />

            <ProjectCard
              title="Loan Categorizer System"
              description="AI-powered system to categorize customer loan requests using advanced NLP techniques"
              technologies={["Python", "LLMs", "RAG", "NLP", "FastAPI"]}
              features={[
                "Intelligent email scraping and categorization",
                "Fine-tuned LLM for loan-related data",
                "Automated tagging and prioritization",
                "Dashboard for support team management",
              ]}
              demoLink="https://github.com/Kumayl-Lokhandwala/loan-categorizer"
              sourceCodeLink="https://github.com/Kumayl-Lokhandwala/loan-categorizer"
            />

            <ProjectCard
              title="Chirp – Social Microblogging Platform"
              description="A real-time microblogging app inspired by Twitter, built with the MERN stack."
              technologies={[
                "MongoDB",
                "Express.js",
                "React.js",
                "Node.js",
                "Tailwind CSS",
              ]}
              features={[
                "Post and view tweets in real-time",
                "Follow and interact with other users",
                "Like and reply to posts",
                "JWT-based authentication system",
                "Clean and responsive UI",
              ]}
              demoLink="https://twitter-clone-fuvp.onrender.com/"
              sourceCodeLink="https://github.com/Kumayl-Lokhandwala/Twitter-Clone"
            />

            <ProjectCard
              title="BlinkIt Data Analysis"
              description="Analyzed BlinkIt’s operations and customer data to extract actionable business insights."
              technologies={[
                "Python",
                "Pandas",
                "NumPy",
                "Matplotlib",
                "Seaborn",
                "Scikit-learn",
              ]}
              features={[
                "Exploratory data analysis on order and delivery trends",
                "Customer segmentation and behavior insights",
                "Sales forecasting using ML models",
                "Visual dashboards for key performance metrics",
              ]}
              demoLink="https://github.com/Kumayl-Lokhandwala/BlinkIt-Data-Analysis"
              sourceCodeLink="https://github.com/Kumayl-Lokhandwala/BlinkIt-Data-Analysis"
            />
          </div>
        )}

        {/* Publications Section */}
        {activeTab === "publications" && (
          <div className="bg-gray-900 rounded-2xl p-6 border border-blue-800">
            <div className="flex items-start gap-6">
              <div className="bg-blue-900 p-4 rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">
                  IEEE ICDCC 2024 Publication
                </h2>
                <p className="text-blue-400 mt-2">
                  The Role of Machine Learning Algorithms in Stock Market
                  Prediction: A Performance Analysis
                </p>

                <div className="mt-6 p-4 bg-blue-900 rounded-xl">
                  <h3 className="text-lg font-medium text-white mb-3">
                    Abstract
                  </h3>
                  <p className="text-blue-300 leading-relaxed">
                    This paper presents an in-depth evaluation of machine
                    learning models for effective stock market price prediction.
                    We compare the performance of regression models and a
                    stacked Long Short-Term Memory (LSTM) network on historical
                    stock data to identify the most accurate forecasting
                    approach. The stacked LSTM architecture is chosen for its
                    ability to capture temporal dependencies in time-series
                    data, enhancing trend recognition. Evaluation metrics such
                    as Mean Squared Error (MSE), Mean Absolute Error (MAE), and
                    Root Mean Square Error (RMSE) are used to assess model
                    performance. The models are tested on data sampled at
                    intervals of 24 hours, 1 hour, and 5 minutes to determine
                    the optimal time resolution for prediction. Our findings
                    highlight the effectiveness of LSTM-based models in
                    minimizing prediction error and avoiding overfitting,
                    offering valuable insights for data-driven investment
                    strategies.
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-blue-400 text-sm">Conference</p>
                    <p className="text-white font-medium">
                      2024 First International Conference on Data, Computation
                      and Communication (ICDCC)
                    </p>
                  </div>

                  <div>
                    <p className="text-blue-400 text-sm">Publication Date</p>
                    <p className="text-white font-medium">April 21, 2025</p>
                  </div>

                  <div>
                    <p className="text-blue-400 text-sm">DOI</p>
                    <p className="text-white font-medium">
                      10.1109/ICDCC62744.2024.10961054
                    </p>
                  </div>

                  <div>
                    <p className="text-blue-400 text-sm">Keywords</p>
                    <p className="text-white font-medium">
                      Stock Prediction, Machine Learning, LSTM, Financial
                      Markets, Algorithmic Trading
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-medium py-2 px-4 rounded-lg flex items-center gap-2">
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
                    <a href="/papers/ieee-paper.pdf" download className="...">
                      Download Full Paper
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Experience Card Component
type ExperienceCardProps = {
  title: string;
  company: string;
  period: string;
  achievements: string[];
  tech: string[];
};

const ExperienceCard = ({
  title,
  company,
  period,
  achievements,
  tech,
}: ExperienceCardProps) => (
  <div className="bg-gray-900 rounded-2xl p-6 border border-blue-800 transition-all hover:border-blue-600">
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
      <div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-blue-400">{company}</p>
      </div>
      <span className="px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-sm">
        {period}
      </span>
    </div>

    <ul className="space-y-3 mb-6">
      {achievements.map((achievement, index) => (
        <li key={index} className="flex items-start">
          <div className="mt-1 mr-2 text-blue-500">
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
          <span className="text-blue-300">{achievement}</span>
        </li>
      ))}
    </ul>

    <div>
      <p className="text-blue-400 text-sm mb-2">Technologies Used</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((t, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-sm"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  </div>
);

// Project Card Component
type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  demoLink?: string;
  sourceCodeLink?: string;
};

const ProjectCard = ({
  title,
  description,
  technologies,
  features,
  demoLink,
  sourceCodeLink,
}: ProjectCardProps) => (
  <div className="bg-gray-900 rounded-2xl p-6 border border-blue-800 transition-all hover:border-blue-600 h-full">
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-blue-400 mb-4">{description}</p>

    <div className="mb-4">
      <p className="text-blue-400 text-sm mb-1">Technologies</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, i) => (
          <span
            key={i}
            className="px-2 py-1 bg-blue-900 text-blue-300 rounded-full text-xs"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>

    <div>
      <p className="text-blue-400 text-sm mb-2">Key Features</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <div className="mt-1 mr-2 text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
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
            <span className="text-blue-300 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </div>

    <div className="mt-6 flex gap-3">
      {demoLink && (
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm bg-blue-900 hover:bg-blue-800 text-blue-300 py-1.5 px-3 rounded-lg transition-all"
        >
          View Demo
        </a>
      )}

      {sourceCodeLink && (
        <a
          href={sourceCodeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm bg-gray-800 hover:bg-gray-700 text-gray-300 py-1.5 px-3 rounded-lg transition-all"
        >
          Source Code
        </a>
      )}
    </div>
  </div>
);

export default Resume;
