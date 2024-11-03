import { Vector3 } from "three";

const LINE_POINTS = 64;

export const getLinePoints = (radius: number) => {
  const points = Array.from({ length: LINE_POINTS }, (_, i) => {
    const angle = (i / LINE_POINTS) * Math.PI * 2;

    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;

    return new Vector3(x, 0, z);
  });
  points.push(points[0]);

  return points;
};
