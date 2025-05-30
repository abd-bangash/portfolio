import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section bg-light dark:bg-navy-light">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          <div className="lg:col-span-7 order-2 lg:order-1">
            <h2 className="section-title">About Me</h2>
            
            <div className="space-y-4 text-slate">
              <p>
                Hello! I'm Abdul Ahad, a passionate full-stack developer with expertise in the MERN stack. 
                My journey in web development began during my computer science studies, where I discovered 
                my passion for creating intuitive and functional web applications.
              </p>
              
              <p>
                I specialize in building responsive, user-friendly websites and applications using modern 
                frameworks and technologies. My approach combines technical expertise with a keen eye for 
                design, ensuring that the end product not only functions flawlessly but also provides an 
                excellent user experience.
              </p>
              
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or enhancing my skills through continuous learning.
              </p>
              
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-dark dark:text-white mb-3">
                  Technologies I've been working with recently:
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {[
                    'JavaScript (ES6+)', 
                    'TypeScript',
                    'React.js', 
                    'Node.js', 
                    'Express.js', 
                    'MongoDB',
                    'Tailwind CSS',
                    'Next.js',
                    'Redux',
                  ].map((tech, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-teal mr-2">▹</span>
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
            <motion.div 
              className="relative max-w-xs"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="relative rounded-lg overflow-hidden border-2 border-teal z-10">
                <img 
                  src="https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Abdul Ahad working on a project" 
                  className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-teal rounded-lg"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;