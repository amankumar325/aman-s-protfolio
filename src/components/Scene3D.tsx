
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const Building = ({ position, scale, color = '#33C3F0' }) => {
  const mesh = useRef();
  
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh position={position} ref={mesh} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const Bridge = ({ position, rotation = [0, 0, 0], scale = [5, 0.2, 1], color = '#8B5A2B' }) => {
  return (
    <mesh position={position} rotation={rotation} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const Scene3D = () => {
  return (
    <div className="h-80 w-full relative bg-transparent">
      <Canvas shadows className="rounded-xl overflow-hidden">
        <PerspectiveCamera makeDefault position={[0, 2, 8]} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} />
        
        {/* Main buildings */}
        <Building position={[0, 0, 0]} scale={[1, 3, 1]} />
        <Building position={[-2, 0, -2]} scale={[1, 2, 1]} color="#67B7D1" />
        <Building position={[2, 0, -1]} scale={[1, 4, 1]} />
        <Building position={[-1, 0, 1]} scale={[1, 2.5, 1]} color="#67B7D1" />
        <Building position={[2, 0, 2]} scale={[1, 1.8, 1]} />
        
        {/* Bridge connecting buildings */}
        <Bridge position={[0, 1, 0]} />
        <Bridge position={[0, 0, 0]} rotation={[0, Math.PI/4, 0]} />
        
        {/* Base plane */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]} receiveShadow>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial color="#f0f0f0" />
        </mesh>
      </Canvas>
    </div>
  );
};

export default Scene3D;
