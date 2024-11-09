import { PointMaterial, Points } from "@react-three/drei";

const STARS_COUNT = 2000;

const STAR_POSITIONS = new Float32Array(STARS_COUNT * 3).map(
  () => (Math.random() - 0.5) * 200
);

export const Stars = () => {
  return (
    <Points positions={STAR_POSITIONS}>
      <PointMaterial size={0.05} color="white" />
    </Points>
  );
};
