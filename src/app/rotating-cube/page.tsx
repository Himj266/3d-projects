"use client";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box } from "@react-three/drei";

import type { Mesh } from "three";

const RotatingCube = () => {
  const cubeRef = useRef<Mesh | null>(null);

  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.y += 0.01;
      cubeRef.current.rotation.x += 0.01;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <Box ref={cubeRef}>
        <meshBasicMaterial color="orange" />
      </Box>
    </>
  );
};

export default function Page() {
  return (
    <div className="h-screen w-screen">
      <Canvas className="bg-black">
        <RotatingCube />
      </Canvas>
    </div>
  );
}
