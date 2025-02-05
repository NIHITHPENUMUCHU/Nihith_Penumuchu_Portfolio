import { SocialLink } from './ui/SocialLink';
import { socialLinks } from '../data/socialLinks';
import { motion } from 'framer-motion';

export function Contact() {
  return (
    <section className="py-20 px-6" id="contact">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500"
        >
          Get in Touch
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {socialLinks.map((link, index) => (
            <SocialLink key={index} link={link} />
          ))}
        </div>
      </div>
    </section>
  );
}