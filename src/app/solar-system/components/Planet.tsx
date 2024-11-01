import { useRef } from "react";

//components
import { Sphere } from "@react-three/drei";

//hooks
import { useFrame, useLoader } from "@react-three/fiber";

import { TextureLoader } from "three";

//types
import type { Mesh } from "three";

interface Props {
  position: [number, number, number];
  radius: number;
  oribtRotationSpeed: number;
  size: number;
  textureFile: string;
}

export const Planet = ({
  position,
  radius,
  oribtRotationSpeed,
  size,
  textureFile,
}: Props) => {
  const ref = useRef<Mesh>(null);

  const planetTexture = useLoader(TextureLoader, textureFile);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
      ref.current.position.z =
        radius * Math.sin(state.clock.elapsedTime * oribtRotationSpeed);
      ref.current.position.x =
        radius * Math.cos(state.clock.elapsedTime * oribtRotationSpeed);
    }
  });

  return (
    <Sphere ref={ref} args={[size]}>
      <meshStandardMaterial map={planetTexture} />
    </Sphere>
  );
};
