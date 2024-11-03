//types
import { PlanetType } from "../types";

const RADIUS_RATIO_MULTIPLIER = 10;
export const SIZE_RATIO_MULTIPLIER = 0.2;

export const PLANETS: PlanetType[] = [
  {
    position: [5, 0, 0],
    id: "mercury",
    radiusRatio: 1 * RADIUS_RATIO_MULTIPLIER,
    oribtRotationSpeedRatio: 1.59,
    size: SIZE_RATIO_MULTIPLIER * 2,
    textureFile: "images/mercury.jpg",
  },
  {
    position: [5, 0, 0],
    id: "venus",
    radiusRatio: 1.3 * RADIUS_RATIO_MULTIPLIER,
    oribtRotationSpeedRatio: 1.18,
    size: SIZE_RATIO_MULTIPLIER * 2.5,
    textureFile: "images/venus.jpg",
  },
  {
    position: [5, 0, 0],
    id: "earth",
    radiusRatio: 1.9 * RADIUS_RATIO_MULTIPLIER,
    oribtRotationSpeedRatio: 1,
    size: SIZE_RATIO_MULTIPLIER * 3,
    textureFile: "images/earth.jpg",
  },
  {
    position: [5, 0, 0],
    id: "mars",
    radiusRatio: 2.2 * RADIUS_RATIO_MULTIPLIER,
    oribtRotationSpeedRatio: 0.808,
    size: SIZE_RATIO_MULTIPLIER * 3.5,
    textureFile: "images/mars.jpg",
  },
  {
    position: [5, 0, 0],
    id: "jupiter",
    radiusRatio: 2.5 * RADIUS_RATIO_MULTIPLIER,
    oribtRotationSpeedRatio: 0.439,
    size: SIZE_RATIO_MULTIPLIER * 4,
    textureFile: "images/jupiter.jpg",
  },
  {
    position: [5, 0, 0],
    id: "saturn",
    radiusRatio: 2.8 * RADIUS_RATIO_MULTIPLIER,
    oribtRotationSpeedRatio: 0.325,
    size: SIZE_RATIO_MULTIPLIER * 7,
    textureFile: "images/saturn.jpg",
  },
  {
    position: [5, 0, 0],
    id: "uranus",
    radiusRatio: 3.1 * RADIUS_RATIO_MULTIPLIER,
    oribtRotationSpeedRatio: 0.228,
    size: SIZE_RATIO_MULTIPLIER * 7,
    textureFile: "images/uranus.jpg",
  },
  {
    position: [5, 0, 0],
    id: "neptune",
    radiusRatio: 3.9 * RADIUS_RATIO_MULTIPLIER,
    oribtRotationSpeedRatio: 0.182,
    size: SIZE_RATIO_MULTIPLIER * 8,
    textureFile: "images/neptune.jpg",
  },
];
