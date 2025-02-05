import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProjectCard } from './ProjectCard';
import { Project } from '../../types/project';
import { useSwipeable } from '../../hooks/useSwipeable';

interface ProjectsSliderProps {
  projects: Project[];
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.4, 0.0, 0.2, 1],
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? '-100%' : '100%',
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.3,
      ease: [0.4, 0.0, 0.2, 1],
    },
  }),
};

export function ProjectsSlider({ projects }: ProjectsSliderProps) {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const paginate = useCallback(
    (newDirection: number) => {
      if (isAnimating) return;

      setIsAnimating(true);
      setPage(([currentPage]) => {
        const nextPage = (currentPage + newDirection + projects.length) % projects.length;
        return [nextPage, newDirection];
      });

      setTimeout(() => setIsAnimating(false), 400);
    },
    [projects.length, isAnimating]
  );

  // Ensure swipeHandlers has the correct type that fits HTML div element
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => paginate(1),
    onSwipedRight: () => paginate(-1),
  });

  return (
    <div
      className="flex items-center gap-4 px-12 md:px-16"
      {...(swipeHandlers as unknown as React.HTMLProps<HTMLDivElement>)}
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => paginate(-1)}
        disabled={isAnimating}
        className="flex-shrink-0 w-10 h-10 bg-emerald-400/20 hover:bg-emerald-400/30 rounded-full flex items-center justify-center transition-colors disabled:opacity-50"
        aria-label="Previous project"
      >
        <ChevronLeft className="w-6 h-6 text-emerald-400" />
      </motion.button>

      <div className="relative overflow-hidden flex-grow">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={page}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(_, { offset, velocity }) => {
              const swipe = Math.abs(offset.x) * velocity.x;
              if (swipe < -100) paginate(1);
              if (swipe > 100) paginate(-1);
            }}
          >
            <ProjectCard project={projects[page]} />
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => paginate(1)}
        disabled={isAnimating}
        className="flex-shrink-0 w-10 h-10 bg-emerald-400/20 hover:bg-emerald-400/30 rounded-full flex items-center justify-center transition-colors disabled:opacity-50"
        aria-label="Next project"
      >
        <ChevronRight className="w-6 h-6 text-emerald-400" />
      </motion.button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-center gap-2">
        {projects.map((_, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              if (!isAnimating) {
                const newDirection = index > page ? 1 : -1;
                setPage([index, newDirection]);
                setIsAnimating(true);
                setTimeout(() => setIsAnimating(false), 400);
              }
            }}
            className={`w-2 h-2 rounded-full transition-colors ${index === page ? 'bg-emerald-400' : 'bg-gray-600'}`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
