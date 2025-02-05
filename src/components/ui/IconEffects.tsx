import { motion } from 'framer-motion';

export const GlowingRing = ({ color = 'emerald' }: { color?: string }) => (
  <motion.div
    className={`absolute inset-0 rounded-full bg-${color}-400/20`}
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{
      scale: [0.8, 1.2, 0.8],
      opacity: [0.3, 0.1, 0.3],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);

export const FloatingParticles = ({ count = 5 }: { count?: number }) => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(count)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-emerald-400/50 rounded-full"
        initial={{ opacity: 0, x: "50%", y: "50%" }}
        animate={{
          opacity: [0, 1, 0],
          x: ["50%", `${50 + (Math.random() * 100 - 50)}%`],
          y: ["50%", `${50 + (Math.random() * 100 - 50)}%`],
        }}
        transition={{
          duration: 2 + Math.random() * 2,
          repeat: Infinity,
          delay: i * 0.2,
          ease: "easeInOut"
        }}
      />
    ))}
  </div>
);

export const PulsingBackground = () => (
  <motion.div
    className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-blue-500/10 rounded-xl"
    animate={{
      scale: [1, 1.02, 1],
      opacity: [0.5, 0.8, 0.5],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);