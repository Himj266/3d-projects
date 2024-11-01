import { useRef } from "react";

//components
import { Sphere } from "@react-three/drei";

//hooks
import { useFrame, useLoader } from "@react-three/fiber";

//constants
import { SIZE_RATIO_MULTIPLIER } from "../constants/planets";

import { TextureLoader } from "three";

//types
import type { Mesh } from "three";

export const Sun = () => {
  const ref = useRef<Mesh>(null);

  const sunTexture = useLoader(TextureLoader, "/images/sun.jpg");

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.001;
    }
  });

  return (
    <Sphere ref={ref} args={[5 * SIZE_RATIO_MULTIPLIER]}>
      <meshStandardMaterial map={sunTexture} />
    </Sphere>
  );
};
