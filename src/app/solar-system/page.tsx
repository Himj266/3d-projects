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
    <div className="h-screen w-screen bg-slate-900">
      <Canvas>
        <OrbitControls />
        <gridHelper />
        <ambientLight intensity={1} />
        <Sun />
        {PLANETS.map(
          ({
            position,
            id,
            radiusRatio,
            oribtRotationSpeedRatio,
            size,
            textureFile,
          }) => (
            <Planet
              position={position}
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
