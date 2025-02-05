import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '../../types/project';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-gray-900 dark:bg-gray-800 rounded-xl overflow-hidden h-full">
      <div className="relative h-2/3">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 flex gap-4">
          <motion.a 
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-gray-900/80 rounded-full hover:bg-emerald-400 transition-colors"
          >
            <Github className="w-6 h-6" />
          </motion.a>
          <motion.a 
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-gray-900/80 rounded-full hover:bg-emerald-400 transition-colors"
          >
            <ExternalLink className="w-6 h-6" />
          </motion.a>
        </div>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
        <p className="text-gray-400 mb-6">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span 
              key={index}
              className="bg-emerald-400/10 text-emerald-400 px-3 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}