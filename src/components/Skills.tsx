import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools';
  icon?: string;
}

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills: Skill[] = [
    // Frontend
    { name: 'HTML5 & CSS3', level: 90, category: 'frontend' },
    { name: 'JavaScript (ES6+)', level: 85, category: 'frontend' },
    { name: 'TypeScript', level: 80, category: 'frontend' },
    { name: 'React.js', level: 88, category: 'frontend' },
    { name: 'Redux', level: 75, category: 'frontend' },
    { name: 'Tailwind CSS', level: 85, category: 'frontend' },
    { name: 'Next.js', level: 78, category: 'frontend' },
    
    // Backend
    { name: 'Node.js', level: 82, category: 'backend' },
    { name: 'Express.js', level: 85, category: 'backend' },
    { name: 'MongoDB', level: 80, category: 'backend' },
    { name: 'REST API Design', level: 83, category: 'backend' },
    { name: 'GraphQL', level: 70, category: 'backend' },
    
    // Tools
    { name: 'Git & GitHub', level: 85, category: 'tools' },
    { name: 'Docker', level: 65, category: 'tools' },
    { name: 'AWS', level: 60, category: 'tools' },
    { name: 'CI/CD', level: 70, category: 'tools' },
  ];

  const renderSkills = (category: 'frontend' | 'backend' | 'tools') => {
    return skills
      .filter(skill => skill.category === category)
      .map((skill, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 * index }}
          className="mb-4"
        >
          <div className="flex justify-between mb-1">
            <span className="text-dark dark:text-white font-medium">{skill.name}</span>
            <span className="text-slate">{skill.level}%</span>
          </div>
          <div className="skill-bar">
            <motion.div 
              className="skill-progress"
              initial={{ width: 0 }}
              animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
              transition={{ duration: 1, delay: 0.2 + 0.1 * index }}
            ></motion.div>
          </div>
        </motion.div>
      ));
  };

  return (
    <section id="skills" className="section" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Skills & Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-navy-light p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-dark dark:text-white mb-6 flex items-center">
                <span className="text-teal mr-2">01.</span> Frontend Development
              </h3>
              {renderSkills('frontend')}
            </div>
            
            <div className="bg-white dark:bg-navy-light p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-dark dark:text-white mb-6 flex items-center">
                <span className="text-teal mr-2">02.</span> Backend Development
              </h3>
              {renderSkills('backend')}
            </div>
            
            <div className="bg-white dark:bg-navy-light p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-dark dark:text-white mb-6 flex items-center">
                <span className="text-teal mr-2">03.</span> Tools & Platforms
              </h3>
              {renderSkills('tools')}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;