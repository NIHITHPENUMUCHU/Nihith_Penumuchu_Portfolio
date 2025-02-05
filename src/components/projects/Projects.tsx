import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { ProjectsScene } from './ProjectsScene';
import { ProjectDetails } from './ProjectDetails';
import { projects } from '../../data/projects';
import { useMediaQuery } from '../../hooks/useMediaQuery';

export function Projects() {
  const [activeProject, setActiveProject] = React.useState(0);
  const isMobile = useMediaQuery('(max-width: 768px)'); // Use the hook to detect screen size

  return (
    <section className="relative min-h-screen py-20 px-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900" id="projects">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my latest work through this interactive 3D gallery. Each project represents
            a unique challenge and solution in web development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className={`h-[500px] w-full bg-gray-800/50 rounded-xl backdrop-blur-sm overflow-hidden shadow-2xl border border-gray-700/50 ${isMobile ? 'h-[300px]' : ''}`}>
            <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 50 }}>
              <PerspectiveCamera makeDefault position={[0, 0, 5]} />
              <ambientLight intensity={0.5} />
              <directionalLight
                position={[10, 10, 5]}
                intensity={2}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
              />
              <Suspense fallback={null}>
                <ProjectsScene activeProject={activeProject} setActiveProject={setActiveProject} />
              </Suspense>
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                minPolarAngle={Math.PI / 2.5}
                maxPolarAngle={Math.PI / 2.5}
              />
            </Canvas>
          </div>

          <ProjectDetails project={projects[activeProject]} />
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setActiveProject(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeProject 
                  ? 'bg-gradient-to-r from-emerald-400 to-blue-500 scale-125' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`View project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
