import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';  // Correct import for an icon component

interface Icon3DProps {
  icon: LucideIcon;
  size: number;
  className?: string;
}

export function Icon3D({ icon: IconComponent, size, className }: Icon3DProps) {
  return (
    <motion.div
      className={`flex items-center justify-center ${className}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <IconComponent size={size} />
    </motion.div>
  );
}
