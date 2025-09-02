import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className="bg-primary dark:bg-slate-950 py-8 relative">
      {/* Back to top button */}
      <button
        onClick={handleBackToTop}
        aria-label="Back to top"
        className="absolute -top-5 right-4 md:right-6 h-10 w-10 rounded-xl bg-secondary text-white shadow-lg flex items-center justify-center hover:translate-y-[-2px] active:scale-95 transition-all"
      >
        <FiArrowUp className="text-xl" />
      </button>
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-textSecondary dark:text-slate-400 text-sm ">
            © {new Date().getFullYear()} Mamta. Short and sweet.
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href={`${process.env.PUBLIC_URL}/Mamta Kumari Resume.pdf`}
              download
              className="px-4 py-2 rounded-md border border-secondary/30 text-secondary hover:bg-secondary/10 transition-colors text-sm"
            >
              Download resume
            </a>
            {/* Social links disabled for now
            {[{ id:1, icon:<FaGithub size={20} />, href:'#', label:'GitHub' }, { id:2, icon:<FaLinkedin size={20} />, href:'https://www.linkedin.com/in/mamta-kumari-48882b263', label:'LinkedIn' }, { id:3, icon:<FaTwitter size={20} />, href:'#', label:'Twitter' }].map(({ id, icon, href, label }) => (
              <a key={id} href={href} target="_blank" rel="noopener noreferrer" className="text-textSecondary dark:text-slate-300 hover:text-secondary transition-colors duration-300" aria-label={label}>
                {icon}
              </a>
            ))}
            */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 