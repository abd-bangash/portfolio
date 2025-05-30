import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.p
                className="text-teal mb-4 font-mono"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Hi, my name is
              </motion.p>

              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-dark dark:text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Abdul Ahad.
              </motion.h1>

              <motion.h2
                className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                I build things for the web.
              </motion.h2>

              <motion.p
                className="text-slate max-w-xl mb-8 text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                I'm a full-stack developer specializing in building exceptional
                digital experiences. Currently, I'm focused on building
                accessible, human-centered products.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <a href="#projects" className="btn-primary">
                  View my work <ArrowRight size={16} className="ml-2" />
                </a>
                <a href="#contact" className="btn-outline">
                  Get in touch
                </a>
              </motion.div>

              <motion.div
                className="flex items-center space-x-6 mt-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <a
                  href="https://github.com/abd-bangash"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate hover:text-teal transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <Github size={22} />
                </a>
                <a
                  href="https://www.linkedin.com/in/a-ahadkhan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate hover:text-teal transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={22} />
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate hover:text-teal transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <Twitter size={22} />
                </a>
              </motion.div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 hidden lg:block">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <div className="relative w-full aspect-square rounded-lg overflow-hidden border-2 border-teal">
                <div className="absolute inset-0 bg-teal/20 z-10"></div>
                <img
                  src="https://images.pexels.com/photos/7775636/pexels-photo-7775636.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Abdul Ahad"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
