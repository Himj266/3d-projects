"use client";
import { useRef } from "react";

import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";

import type { Mesh } from "three";

const BouncingSphere = () => {
  const sphereRef = useRef<Mesh>(null);
  const currentPositionRef = useRef<[number, number, number]>([0, 2, 0]);
  const movementRef = useRef(0.01);

  useFrame(() => {
    if (sphereRef.current) {
      currentPositionRef.current[1] -= movementRef.current;
      sphereRef.current.position.set(...currentPositionRef.current);
      if (Math.abs(currentPositionRef.current[1]) > 2) {
        movementRef.current *= -1;
      }
    }
  });

  return (
    <Sphere ref={sphereRef}>
      <meshBasicMaterial color="yellow" />
    </Sphere>
  );
};

export default function Page() {
  return (
    <div className="h-screen w-screen">
      <Canvas className="bg-black">
        <BouncingSphere />
      </Canvas>
    </div>
  );
}
