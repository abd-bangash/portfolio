import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-navy py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <a 
              href="#home"
              className="text-lg font-poppins font-bold text-navy dark:text-teal"
            >
              <span className="text-teal dark:text-teal">&lt;</span>
              Abdul Ahad
              <span className="text-teal dark:text-teal">/&gt;</span>
            </a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-slate text-sm">
              &copy; {currentYear} Abdul Ahad. All rights reserved.
            </p>
            <p className="text-slate text-xs mt-1">
              Designed and built with ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;