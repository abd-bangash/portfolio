import React, { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-navy/90 backdrop-blur-sm shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <motion.a
          href="#home"
          className="text-2xl font-poppins font-bold text-navy dark:text-teal"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-teal dark:text-teal">&lt;</span>
          Abdul Ahad
          <span className="text-teal dark:text-teal">/&gt;</span>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <motion.ul
            className="flex items-center space-x-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
          >
            {navLinks.map((link, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <a
                  href={link.href}
                  className="nav-link text-sm font-medium hover:text-teal transition-colors duration-300"
                >
                  <span className="text-teal dark:text-teal">
                    {index + 1}.{" "}
                  </span>{" "}
                  {link.name}
                </a>
              </motion.li>
            ))}
          </motion.ul>

          <motion.button
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-navy-light transition-colors duration-300"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {theme === "dark" ? (
              <Sun size={20} className="text-teal" />
            ) : (
              <Moon size={20} className="text-navy" />
            )}
          </motion.button>

          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            Resume
          </motion.a>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <button
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-navy-light transition-colors duration-300"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              <Sun size={20} className="text-teal" />
            ) : (
              <Moon size={20} className="text-navy" />
            )}
          </button>

          <button
            className="p-2 text-navy dark:text-white"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-white/95 dark:bg-navy/95 backdrop-blur-sm z-50 flex flex-col p-8"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex justify-end">
            <button
              className="p-2 text-navy dark:text-white bg-gray-100 dark:bg-navy-light rounded-full"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col items-center justify-center flex-grow">
            <ul className="flex flex-col items-center space-y-8">
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="text-xl font-medium text-navy dark:text-white hover:text-teal dark:hover:text-teal transition-colors duration-300 bg-gray-100 dark:bg-navy-light px-6 py-2 rounded-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-teal">{index + 1}. </span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>

            <motion.a
              href="/resume.pdf"
              download="Abdul_Ahad_Resume.pdf"
              className="btn-outline text-sm mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Resume
            </motion.a>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
