"use client";

//components
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Sun } from "./components/Sun";
import { Planet } from "./components/Planet";

//constants
import { PLANETS } from "./constants/planets";

export default function Page() {
  return (
    <div className="h-screen w-screen bg-black">
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.3} />
        <Sun />
        {PLANETS.map(
          ({ id, radiusRatio, oribtRotationSpeedRatio, size, textureFile }) => (
            <Planet
              key={id}
              radius={radiusRatio}
              oribtRotationSpeed={oribtRotationSpeedRatio}
              size={size}
              textureFile={textureFile}
            />
          )
        )}
      </Canvas>
    </div>
  );
}
