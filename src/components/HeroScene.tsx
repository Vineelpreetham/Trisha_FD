"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, MeshTransmissionMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function AbstractShape() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
      meshRef.current.rotation.z += delta * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef} scale={1.5}>
        <torusKnotGeometry args={[1, 0.3, 200, 32]} />
        <MeshTransmissionMaterial
          backside
          samples={3}
          resolution={128}
          thickness={0.5}
          chromaticAberration={0.025}
          anisotropy={0.1}
          distortion={0.5}
          distortionScale={0.5}
          temporalDistortion={0.1}
          iridescence={1}
          iridescenceIOR={1}
          iridescenceThicknessRange={[0, 1400]}
          color="#ffffff"
        />
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 w-full h-full -z-10 bg-transparent opacity-80 mix-blend-screen pointer-events-none">
      <Canvas 
        dpr={[1, 1.5]} 
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ powerPreference: "high-performance", alpha: true, antialias: false, stencil: false }}
      >
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
        <spotLight position={[-10, 10, -10]} intensity={3} color="#a0c0ff" />
        <AbstractShape />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
