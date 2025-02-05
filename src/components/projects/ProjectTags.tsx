import { motion } from 'framer-motion';

interface ProjectTagsProps {
  tags: string[];
}

export function ProjectTags({ tags }: ProjectTagsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <motion.span
          key={tag}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          className="px-3 py-1 bg-emerald-400/10 text-emerald-400 text-sm rounded-full"
        >
          {tag}
        </motion.span>
      ))}
    </div>
  );
}