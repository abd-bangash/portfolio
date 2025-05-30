import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Folder } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
  image: string;
  technologies: string[];
  githubLink?: string;
  featured: boolean;
  category: 'web' | 'mobile' | 'design';
}

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState<'all' | 'web' | 'mobile' | 'design'>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "Know Your Games",
      description: "A game exploration website to discover and learn about your favorite games.",
      image: "https://images.pexels.com/photos/3977908/pexels-photo-3977908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "https://know-your-games.vercel.app/",
      technologies: ["React", "TypeScript", "Tailwind CSS", "API Integration"],
      githubLink: "https://github.com/abd-bangash/know-your-games",
      featured: true,
      category: 'web'
    },
    {
      id: 2,
      title: "MindfulSpace",
      description: "Your Journey to Mental Wellness. Discover the tools, community, and resources to nurture your mind and build resilience in a safe, supportive environment.",
      image: "https://images.pexels.com/photos/3560044/pexels-photo-3560044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "https://project-me8k1seht-abdul-ahads-projects-12eb7c8d.vercel.app/",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      githubLink: "https://github.com/abd-bangash/MindfulSpace",
      featured: true,
      category: 'web'
    },
    {
      id: 3,
      title: "Docs App",
      description: "A front-end-only fun documentation app with a sleek interface.",
      image: "https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "https://docs-app-ivory.vercel.app/",
      technologies: ["React", "Framer Motion", "Tailwind CSS"],
      githubLink: "https://github.com/abd-bangash/docs-app",
      featured: true,
      category: 'web'
    },
    {
      id: 4,
      title: "React Blog",
      description: "A proper blog website with functionality to create and delete blogs.",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "https://react-js-blog-two.vercel.app/",
      technologies: ["React", "Node.js", "MongoDB"],
      githubLink: "https://github.com/abd-bangash/react-blog",
      featured: false,
      category: 'web'
    },
    {
      id: 5,
      title: "Simulator",
      description: "A simulator for predicting customer counts and analyzing trends.",
      image: "https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "https://simulator-seven.vercel.app/",
      technologies: ["React", "Chart.js", "Tailwind CSS"],
      githubLink: "https://github.com/abd-bangash/simulator",
      featured: false,
      category: 'web'
    },
    {
      id: 6,
      title: "Expense Tracker",
      description: "An expense tracker app to manage and visualize your daily expenses.",
      image: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "https://expense-tracker-react-coral-seven.vercel.app/",
      technologies: ["React", "Context API", "LocalStorage"],
      githubLink: "https://github.com/abd-bangash/expense-tracker",
      featured: false,
      category: 'web'
    },
    {
      id: 7,
      title: "Green Book",
      description: "A web app inspired by Green Book to organize and manage your contacts.",
      image: "https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "https://greenbook-zeta.vercel.app/",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      githubLink: "https://github.com/abd-bangash/greenbook",
      featured: false,
      category: 'web'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="section bg-light dark:bg-navy-light" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">My Projects</h2>
          
          <div className="mb-10">
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <button 
                className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                  filter === 'all' 
                    ? 'bg-teal text-navy font-medium' 
                    : 'bg-gray-200 dark:bg-navy hover:bg-gray-300 dark:hover:bg-navy-dark text-slate'
                }`}
                onClick={() => setFilter('all')}
              >
                All
              </button>
              <button 
                className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                  filter === 'web' 
                    ? 'bg-teal text-navy font-medium' 
                    : 'bg-gray-200 dark:bg-navy hover:bg-gray-300 dark:hover:bg-navy-dark text-slate'
                }`}
                onClick={() => setFilter('web')}
              >
                Web
              </button>
              <button 
                className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                  filter === 'mobile' 
                    ? 'bg-teal text-navy font-medium' 
                    : 'bg-gray-200 dark:bg-navy hover:bg-gray-300 dark:hover:bg-navy-dark text-slate'
                }`}
                onClick={() => setFilter('mobile')}
              >
                Mobile
              </button>
              <button 
                className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                  filter === 'design' 
                    ? 'bg-teal text-navy font-medium' 
                    : 'bg-gray-200 dark:bg-navy hover:bg-gray-300 dark:hover:bg-navy-dark text-slate'
                }`}
                onClick={() => setFilter('design')}
              >
                Design
              </button>
            </div>
          </div>
          
          {/* Featured Projects */}
          {(filter === 'all' || featuredProjects.some(p => p.category === filter)) && (
            <div className="mb-16">
              <h3 className="text-xl font-semibold text-dark dark:text-white mb-8">Featured Projects</h3>
              
              <div className="space-y-24">
                {featuredProjects
                  .filter(project => filter === 'all' || project.category === filter)
                  .map((project, index) => (
                    <motion.div 
                      key={project.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className={`grid grid-cols-1 lg:grid-cols-12 gap-6 items-center ${
                        index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                      }`}
                    >
                      <div className={`lg:col-span-7 ${index % 2 === 0 ? '' : 'lg:order-2'}`}>
                        <div className="relative group rounded-lg overflow-hidden shadow-lg">
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-navy/50 dark:bg-navy/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="flex gap-4">
                              {project.githubLink && (
                                <a 
                                  href={project.githubLink} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="bg-white dark:bg-navy p-3 rounded-full hover:text-teal transition-colors duration-300"
                                  aria-label={`View ${project.title} source code on GitHub`}
                                >
                                  <Github size={20} />
                                </a>
                              )}
                              {project.link && (
                                <a 
                                  href={project.link} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="bg-white dark:bg-navy p-3 rounded-full hover:text-teal transition-colors duration-300"
                                  aria-label={`View live demo of ${project.title}`}
                                >
                                  <ExternalLink size={20} />
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className={`lg:col-span-5 ${index % 2 === 0 ? 'lg:order-2' : ''}`}>
                        <div className={`text-right ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                          <p className="text-teal font-mono mb-1">Featured Project</p>
                          <h4 className="text-2xl font-bold text-dark dark:text-white mb-4">{project.title}</h4>
                        </div>
                        
                        <div className={`bg-white dark:bg-navy p-6 rounded-lg shadow-lg ${
                          index % 2 === 0 ? 'lg:-mr-16 lg:z-10 relative' : 'lg:-ml-16 lg:z-10 relative'
                        }`}>
                          <p className="text-slate mb-4">{project.description}</p>
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.technologies.map((tech, i) => (
                              <span 
                                key={i} 
                                className="text-xs font-mono px-3 py-1 rounded-full bg-gray-100 dark:bg-navy-light text-slate"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          
                          <div className={`flex gap-4 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                            {project.githubLink && (
                              <a 
                                href={project.githubLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-dark dark:text-white hover:text-teal dark:hover:text-teal transition-colors duration-300"
                                aria-label="GitHub Repository"
                              >
                                <Github size={20} />
                              </a>
                            )}
                            {project.link && (
                              <a 
                                href={project.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-dark dark:text-white hover:text-teal dark:hover:text-teal transition-colors duration-300"
                                aria-label="Live Demo"
                              >
                                <ExternalLink size={20} />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
          )}
          
          {/* Other Projects */}
          {(filter === 'all' || otherProjects.some(p => p.category === filter)) && (
            <div>
              <h3 className="text-xl font-semibold text-dark dark:text-white mb-8">Other Noteworthy Projects</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherProjects
                  .filter(project => filter === 'all' || project.category === filter)
                  .map((project, index) => (
                    <motion.div 
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      className="bg-white dark:bg-navy hover:transform hover:-translate-y-2 transition-all duration-300 rounded-lg shadow-md overflow-hidden h-full flex flex-col"
                    >
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex justify-between items-start mb-4">
                          <Folder size={40} className="text-teal" />
                          <div className="flex gap-3">
                            {project.githubLink && (
                              <a 
                                href={project.githubLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-slate hover:text-teal transition-colors duration-300"
                                aria-label="GitHub Repository"
                              >
                                <Github size={18} />
                              </a>
                            )}
                            {project.link && (
                              <a 
                                href={project.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-slate hover:text-teal transition-colors duration-300"
                                aria-label="Live Demo"
                              >
                                <ExternalLink size={18} />
                              </a>
                            )}
                          </div>
                        </div>
                        
                        <h4 className="text-xl font-bold text-dark dark:text-white mb-2">{project.title}</h4>
                        <p className="text-slate mb-6 flex-grow">{project.description}</p>
                        
                        <div className="flex flex-wrap gap-2 mt-auto">
                          {project.technologies.map((tech, i) => (
                            <span 
                              key={i} 
                              className="text-xs font-mono px-2 py-1 rounded-full bg-gray-100 dark:bg-navy-light text-slate"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;