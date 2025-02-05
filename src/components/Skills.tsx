import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Globe, GitBranch, Terminal, Cpu, Layout, Wrench } from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ElementType;
  description: string;
  technologies: string[];
}

export function Skills() {
  const skills: Skill[] = [
    {
      name: "Frontend Development",
      icon: Layout,
      description: "Building responsive and interactive user interfaces with modern frameworks",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"]
    },
    {
      name: "Backend Development",
      icon: Terminal,
      description: "Creating scalable server-side applications and RESTful APIs",
      technologies: ["Node.js", "Express", "Python", "FastAPI"]
    },
    {
      name: "Database Management",
      icon: Database,
      description: "Designing and optimizing database schemas and queries",
      technologies: ["MongoDB", "PostgreSQL", "Redis", "Firebase"]
    },
    {
      name: "Web Technologies",
      icon: Globe,
      description: "Proficient in core web technologies and modern standards",
      technologies: ["HTML5", "CSS3", "JavaScript", "Web APIs"]
    },
    {
      name: "Version Control",
      icon: GitBranch,
      description: "Experienced in collaborative development and code management",
      technologies: ["Git", "GitHub", "GitLab", "CI/CD"]
    },
    {
      name: "Development Tools",
      icon: Wrench,
      description: "Utilizing modern development tools and practices",
      technologies: ["VS Code", "Docker", "Webpack", "npm/yarn"]
    },
    {
      name: "Programming Languages",
      icon: Code2,
      description: "Strong foundation in multiple programming paradigms",
      technologies: ["JavaScript", "TypeScript", "Python", "Java"]
    },
    {
      name: "System Architecture",
      icon: Cpu,
      description: "Designing scalable and maintainable system architectures",
      technologies: ["Microservices", "REST", "GraphQL", "AWS"]
    }
  ];

  return (
    <section className="py-20 px-6" id="skills">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Skills & Expertise
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-emerald-400/10 rounded-lg group-hover:bg-emerald-400/20 transition-colors">
                    <Icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
                <p className="text-gray-400 mb-4">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-emerald-400/10 text-emerald-400 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}