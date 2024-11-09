"use client";

//components
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Sun } from "./components/Sun";
import { Planet } from "./components/Planet";
import { Stars } from "./components/Stars";

//constants
import { PLANETS } from "./constants/planets";

export default function Page() {
  return (
    <div className="h-screen w-screen bg-black">
      <Canvas camera={{ position: [0, 80, 100] }}>
        <OrbitControls target={[0, 0, 0]} minDistance={10} maxDistance={100} />
        <ambientLight intensity={0.3} />
        <Stars />
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
