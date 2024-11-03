import { useRef, useMemo } from "react";

//components
import { Sphere, Line } from "@react-three/drei";

//hooks
import { useFrame, useLoader } from "@react-three/fiber";

//utils
import { TextureLoader } from "three";
import { getLinePoints } from "../utils/getLinePoints";

//types
import type { Mesh } from "three";

interface Props {
  radius: number;
  oribtRotationSpeed: number;
  size: number;
  textureFile: string;
}

export const Planet = ({
  radius,
  oribtRotationSpeed,
  size,
  textureFile,
}: Props) => {
  const ref = useRef<Mesh>(null);

  const planetTexture = useLoader(TextureLoader, textureFile);

  const points = useMemo(() => getLinePoints(radius), [radius]);

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
    <>
      <Line points={points} />
      <Sphere ref={ref} args={[size]}>
        <meshStandardMaterial map={planetTexture} />
      </Sphere>
    </>
  );
};
