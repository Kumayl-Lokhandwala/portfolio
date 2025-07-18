import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import {
  FiMail,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiSend,
  FiMapPin,
} from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

// Define types for our form data
type FormData = {
  email: string;
  phone: string;
  message: string;
};

type SocialLink = {
  name: string;
  icon: React.ReactNode;
  url: string;
  gradient: string;
};

type SubmitStatus = "success" | "error" | null;

const ContactMe: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);
  const [activeField, setActiveField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
      await axios.post(formspreeEndpoint, formData);
      setSubmitStatus("success");
      setFormData({ email: "", phone: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const socialLinks: SocialLink[] = [
    {
      name: "Email",
      icon: <FiMail className="text-xl" />,
      url: "mailto:kumayllokhandwala04@gmail.com",
      gradient: "from-red-500 to-pink-500",
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin className="text-xl" />,
      url: "https://linkedin.com/in/kumayl-lokhandwala",
      gradient: "from-blue-600 to-blue-400",
    },
    {
      name: "GitHub",
      icon: <FiGithub className="text-xl" />,
      url: "https://github.com/kumayl-lokhandwala",
      gradient: "from-gray-800 to-gray-600",
    },
    {
      name: "LeetCode",
      icon: <SiLeetcode className="text-xl" />,
      url: "https://leetcode.com/kumayl_lokhandwala",
      gradient: "from-amber-500 to-amber-300",
    },
  ];

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-br from-[#0b0f19] via-[#0f172a] to-[#1e293b] text-white py-24 px-4 sm:px-6 overflow-hidden min-h-screen flex items-center"
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

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto my-6 rounded-full" />
          <p className="text-lg text-sky-200/80 max-w-2xl mx-auto">
            Have a project in mind or want to connect? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#1e293b]/70 to-[#0f172a]/80 border border-sky-500/30 rounded-2xl p-8 shadow-2xl backdrop-blur-xl"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-sky-300">
              <FiSend className="text-cyan-400" />
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-sky-200 mb-2"
                >
                  Email Address
                </label>
                <div
                  className={`relative transition-all duration-300 ${
                    activeField === "email"
                      ? "ring-2 ring-cyan-500 rounded-lg"
                      : ""
                  }`}
                  onFocus={() => setActiveField("email")}
                  onBlur={() => setActiveField(null)}
                >
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMail className="text-cyan-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-[#0f172a]/50 border border-sky-500/30 text-gray-200 rounded-lg block w-full pl-10 p-3.5 focus:outline-none focus:ring-0"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-sky-200 mb-2"
                >
                  Phone Number (Optional)
                </label>
                <div
                  className={`relative transition-all duration-300 ${
                    activeField === "phone"
                      ? "ring-2 ring-cyan-500 rounded-lg"
                      : ""
                  }`}
                  onFocus={() => setActiveField("phone")}
                  onBlur={() => setActiveField(null)}
                >
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiPhone className="text-cyan-400" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-[#0f172a]/50 border border-sky-500/30 text-gray-200 rounded-lg block w-full pl-10 p-3.5 focus:outline-none focus:ring-0"
                    placeholder="+91 9004372229"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-sky-200 mb-2"
                >
                  Message
                </label>
                <div
                  className={`relative transition-all duration-300 ${
                    activeField === "message"
                      ? "ring-2 ring-cyan-500 rounded-lg"
                      : ""
                  }`}
                  onFocus={() => setActiveField("message")}
                  onBlur={() => setActiveField(null)}
                >
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-[#0f172a]/50 border border-sky-500/30 text-gray-200 rounded-lg block w-full p-3.5 focus:outline-none focus:ring-0"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <AnimatePresence>
                  {submitStatus === "success" && (
                    <motion.p
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-green-400 text-sm font-medium"
                    >
                      Message sent successfully!
                    </motion.p>
                  )}
                  {submitStatus === "error" && (
                    <motion.p
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-red-400 text-sm font-medium"
                    >
                      Failed to send message. Please try again.
                    </motion.p>
                  )}
                </AnimatePresence>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-sky-500 to-cyan-400 text-white font-medium rounded-xl px-7 py-3.5 flex items-center space-x-2 shadow-lg hover:shadow-sky-500/30 transition-all disabled:opacity-70"
                >
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  <FiSend className="text-lg" />
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div className="bg-gradient-to-br from-[#1e293b]/70 to-[#0f172a]/80 border border-sky-500/30 rounded-2xl p-8 shadow-2xl backdrop-blur-xl h-full">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-sky-300">
                <FiMapPin className="text-cyan-400" />
                Contact Information
              </h3>

              <p className="text-sky-200/90 mb-8">
                Feel free to reach out through any of these platforms. I'm
                always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>

              <div className="mb-10">
                <h4 className="text-lg font-semibold text-sky-200 mb-4">
                  Social Profiles
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`bg-gradient-to-r ${link.gradient} text-white rounded-xl p-4 flex flex-col items-center justify-center space-y-2 shadow-lg hover:shadow-xl transition-all`}
                    >
                      {link.icon}
                      <span className="font-medium">{link.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-sky-200 mb-4">
                  Direct Contact
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-3 bg-[#0f172a]/50 border border-sky-500/20 rounded-xl">
                    <div className="bg-gradient-to-r from-sky-500 to-cyan-400 p-3 rounded-xl">
                      <FiMail className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-sky-200/80">Email</p>
                      <p className="text-gray-200 font-medium">
                        kumayllokhandwala04@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-3 bg-[#0f172a]/50 border border-sky-500/20 rounded-xl">
                    <div className="bg-gradient-to-r from-sky-500 to-cyan-400 p-3 rounded-xl">
                      <FiPhone className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-sky-200/80">Phone</p>
                      <p className="text-gray-200 font-medium">
                        +91 9004372229
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
