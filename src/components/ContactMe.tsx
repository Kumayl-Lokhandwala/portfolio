import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

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
  color: string;
};

type SubmitStatus = 'success' | 'error' | null;

const ContactMe: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await axios.post('https://formspree.io/f/YOUR_FORMSPREE_ID', formData);
      setSubmitStatus('success');
      setFormData({ email: '', phone: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const socialLinks: SocialLink[] = [
    {
      name: 'Email',
      icon: <FiMail className="text-2xl" />,
      url: 'mailto:your.email@example.com',
      color: 'bg-gradient-to-r from-red-500 to-pink-500'
    },
    {
      name: 'LinkedIn',
      icon: <FiLinkedin className="text-2xl" />,
      url: 'https://linkedin.com/in/kumayl-lokhandwala',
      color: 'bg-gradient-to-r from-blue-600 to-blue-400'
    },
    {
      name: 'GitHub',
      icon: <FiGithub className="text-2xl" />,
      url: 'https://github.com/kumayl-lokhandwala',
      color: 'bg-gradient-to-r from-gray-800 to-gray-600'
    },
    {
      name: 'LeetCode',
      icon: <SiLeetcode className="text-2xl" />,
      url: 'https://leetcode.com/your-username',
      color: 'bg-gradient-to-r from-amber-500 to-amber-300'
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-[#0b0f19] via-[#0f172a] to-[#1e293b] text-white py-20 px-4 sm:px-6 overflow-hidden min-h-screen">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
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
            className="bg-gradient-to-br from-[#1e293b]/80 to-[#0f172a]/90 border border-sky-500/20 rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-6 text-sky-300">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMail className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-[#0f172a]/50 border border-gray-700/50 text-gray-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 block w-full pl-10 p-3"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number (Optional)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiPhone className="text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-[#0f172a]/50 border border-gray-700/50 text-gray-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 block w-full pl-10 p-3"
                    placeholder="+1 (123) 456-7890"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-[#0f172a]/50 border border-gray-700/50 text-gray-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 block w-full p-3"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <div className="flex items-center justify-between">
                {submitStatus === 'success' && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-green-400 text-sm"
                  >
                    Message sent successfully!
                  </motion.p>
                )}
                {submitStatus === 'error' && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-400 text-sm"
                  >
                    Failed to send message. Please try again.
                  </motion.p>
                )}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-sky-500 to-cyan-400 text-white font-medium rounded-lg px-6 py-3 flex items-center space-x-2 shadow-lg hover:shadow-sky-500/30 transition-all disabled:opacity-70"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <FiSend />
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div className="bg-gradient-to-br from-[#1e293b]/80 to-[#0f172a]/90 border border-sky-500/20 rounded-2xl p-8 shadow-xl h-full">
              <h3 className="text-2xl font-bold mb-6 text-sky-300">Connect With Me</h3>
              <p className="text-gray-300 mb-8">
                Feel free to reach out through any of these platforms. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`${link.color} text-white rounded-xl p-4 flex flex-col items-center justify-center space-y-2 shadow-lg hover:shadow-xl transition-all`}
                  >
                    {link.icon}
                    <span className="font-medium">{link.name}</span>
                  </motion.a>
                ))}
              </div>

              <div className="mt-12">
                <h4 className="text-lg font-semibold text-gray-300 mb-4">Direct Contact</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-4">
                    <FiMail className="text-sky-400 text-xl" />
                    <span className="text-gray-300">your.email@example.com</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <FiPhone className="text-sky-400 text-xl" />
                    <span className="text-gray-300">+1 (123) 456-7890</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-sky-500/10 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full filter blur-3xl opacity-30"></div>
      </div>
    </section>
  );
};

export default ContactMe;