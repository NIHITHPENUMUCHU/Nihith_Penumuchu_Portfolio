import { useFrame } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import * as THREE from 'three';
import React from 'react';
import { Text } from '@react-three/drei';
import { projects } from '../../data/projects';

interface ProjectsSceneProps {
  activeProject: number;
  setActiveProject: (index: number) => void;
}

function ProjectCube({ position, rotation, onClick, isActive, index }: any) {
  const springs = useSpring({
    scale: isActive ? 1.2 : 1,
    color: isActive ? '#34d399' : '#94a3b8',
    config: { mass: 2, tension: 170, friction: 12 }
  });

  return (
    <animated.mesh
      position={position}
      rotation={rotation}
      onClick={onClick}
      scale={springs.scale}
      castShadow
    >
      <boxGeometry args={[1, 1, 1]} />
      <animated.meshStandardMaterial 
        color={springs.color} 
        metalness={0.8}
        roughness={0.2}
      />
      <Text
        position={[0, 0, 0.6]}
        fontSize={0.2}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        {index + 1}
      </Text>
    </animated.mesh>
  );
}

export function ProjectsScene({ activeProject, setActiveProject }: ProjectsSceneProps) {
  const groupRef = React.useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
    }
  });

  const radius = 2;
  const totalProjects = projects.length;
  const angleStep = (2 * Math.PI) / totalProjects;

  return (
    <group ref={groupRef}>
      {projects.map((_, index) => {
        const angle = index * angleStep;
        const x = radius * Math.cos(angle);
        const z = radius * Math.sin(angle);

        return (
          <ProjectCube
            key={index}
            position={[x, 0, z]}
            rotation={[0, -angle, 0]}
            onClick={() => setActiveProject(index)}
            isActive={index === activeProject}
            index={index}
          />
        );
      })}
    </group>
  );
}