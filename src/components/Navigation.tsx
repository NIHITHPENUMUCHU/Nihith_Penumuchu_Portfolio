import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollToSection } from '../hooks/useScrollToSection';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = useScrollToSection();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (sectionId: string) => {
    toggleMenu();
    scrollToSection(sectionId);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 bg-gray-900/80 backdrop-blur-sm z-50"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.button
            onClick={() => scrollToSection('home')}
            whileHover={{ scale: 1.1 }}
            className="text-2xl font-bold text-emerald-400 cursor-pointer"
          >
            Portfolio
          </motion.button>
          
          <button 
            onClick={toggleMenu}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-emerald-400 transition-colors">Home</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-emerald-400 transition-colors">About</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-emerald-400 transition-colors">Skills</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-emerald-400 transition-colors">Services</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-emerald-400 transition-colors">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-emerald-400 transition-colors">Contact</button>
            <Link 
              to="/resume"
              className="flex items-center gap-2 px-4 py-2 bg-emerald-400 text-gray-900 rounded-lg hover:bg-emerald-500 transition-colors"
            >
              <FileText size={18} />
              Resume
            </Link>
          </div>

          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: isMenuOpen ? 1 : 0,
              height: isMenuOpen ? 'auto' : 0
            }}
            className="absolute top-full left-0 right-0 bg-gray-900/95 md:hidden overflow-hidden"
          >
            <div className="flex flex-col items-center gap-4 py-6">
              <button onClick={() => handleNavClick('home')} className="hover:text-emerald-400 transition-colors">Home</button>
              <button onClick={() => handleNavClick('about')} className="hover:text-emerald-400 transition-colors">About</button>
              <button onClick={() => handleNavClick('skills')} className="hover:text-emerald-400 transition-colors">Skills</button>
              <button onClick={() => handleNavClick('services')} className="hover:text-emerald-400 transition-colors">Services</button>
              <button onClick={() => handleNavClick('projects')} className="hover:text-emerald-400 transition-colors">Projects</button>
              <button onClick={() => handleNavClick('contact')} className="hover:text-emerald-400 transition-colors">Contact</button>
              <Link 
                to="/resume"
                onClick={toggleMenu}
                className="flex items-center gap-2 px-4 py-2 bg-emerald-400 text-gray-900 rounded-lg hover:bg-emerald-500 transition-colors"
              >
                <FileText size={18} />
                Resume
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}