import { motion } from 'framer-motion';

export function RotatingCircle() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="w-full h-full rounded-full border-2 border-dashed border-emerald-400/30"
        style={{ transformOrigin: 'center center' }}
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-4 rounded-full border-2 border-dashed border-emerald-400/20"
        style={{ transformOrigin: 'center center' }}
      />
    </div>
  );
}