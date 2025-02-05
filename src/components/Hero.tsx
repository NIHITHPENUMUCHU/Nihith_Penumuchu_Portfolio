import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { RotatingCircle } from './ui/RotatingCircle';

export function Hero() {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Nihith_Penumuchu_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="pt-32 pb-20 px-6" id="home">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="max-w-2xl w-full">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mb-4"
          >
            Full Stack Developer
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Hello I'm
            <span className="block text-emerald-400 mt-2">Nihith Penumuchu</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-gray-400 text-base md:text-lg mb-8"
          >
            I am a passionate Full Stack Developer with expertise in MERN stack development.
            Currently pursuing B.Tech in Computer Science at SRM-KTR University.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-6"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadCV}
              className="flex items-center gap-2 bg-emerald-400 text-gray-900 px-6 py-3 rounded-lg hover:bg-emerald-500 transition-colors"
            >
              <Download size={20} />
              Download CV
            </motion.button>
          </motion.div>
        </div>
        <div className="relative w-64 h-64 md:w-96 md:h-96 flex-shrink-0">
          <RotatingCircle />
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-emerald-400">
              <img 
                src="/profile.jpg"
                alt="Nihith Penumuchu"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}