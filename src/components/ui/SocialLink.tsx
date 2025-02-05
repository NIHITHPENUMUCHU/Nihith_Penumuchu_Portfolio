import { motion } from 'framer-motion';
import { SocialLink as SocialLinkType } from '../../types/social';
import { Icon3D } from './Icon3D'; // Correctly imported

interface SocialLinkProps {
  link: SocialLinkType;
}

export function SocialLink({ link }: SocialLinkProps) {
  return (
    <motion.a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="group flex flex-col items-center gap-4 p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:bg-gray-700/50 transition-all duration-300"
    >
      {/* Use the Icon3D component here */}
      <Icon3D icon={link.icon} size={32} className="text-emerald-400 group-hover:text-emerald-300" />
      <span className="text-sm font-medium group-hover:text-emerald-400 transition-colors">{link.label}</span>
    </motion.a>
  );
}
