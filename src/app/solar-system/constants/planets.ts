//types
import { PlanetType } from "../types";

const RADIUS_RATIO_MULTIPLIER = 3 / 0.39;
export const SIZE_RATIO_MULTIPLIER = 0.2;

export const PLANETS: PlanetType[] = [
  {
    position: [5, 0, 0],
    id: "mercury",
    radiusRatio: 0.39 * RADIUS_RATIO_MULTIPLIER,
    oribtRotationSpeedRatio: 1.59,
    size: SIZE_RATIO_MULTIPLIER * 0.38,
    textureFile: "images/mercury.jpg",
  },
  {
    position: [5, 0, 0],
    id: "venus",
    radiusRatio: 0.72 * RADIUS_RATIO_MULTIPLIER,
    oribtRotationSpeedRatio: 1.18,
    size: SIZE_RATIO_MULTIPLIER * 0.95,
    textureFile: "images/venus.jpg",
  },
  {
    position: [5, 0, 0],
    id: "earth",
    radiusRatio: 1 * RADIUS_RATIO_MULTIPLIER,
    oribtRotationSpeedRatio: 1,
    size: SIZE_RATIO_MULTIPLIER * 1,
    textureFile: "images/earth.jpg",
  },
  {
    position: [5, 0, 0],
    id: "mars",
    radiusRatio: 1.52 * RADIUS_RATIO_MULTIPLIER,
    oribtRotationSpeedRatio: 0.808,
    size: SIZE_RATIO_MULTIPLIER * 0.5,
    textureFile: "images/mars.jpg",
  },
  {
    position: [5, 0, 0],
    id: "jupiter",
    radiusRatio: 5.2 * RADIUS_RATIO_MULTIPLIER,
    oribtRotationSpeedRatio: 0.439,
    size: SIZE_RATIO_MULTIPLIER * 11,
    textureFile: "images/jupiter.jpg",
  },
  {
    position: [5, 0, 0],
    id: "saturn",
    radiusRatio: 9.54 * RADIUS_RATIO_MULTIPLIER,
    oribtRotationSpeedRatio: 0.325,
    size: SIZE_RATIO_MULTIPLIER * 9,
    textureFile: "images/saturn.jpg",
  },
  {
    position: [5, 0, 0],
    id: "uranus",
    radiusRatio: 19.2 * RADIUS_RATIO_MULTIPLIER,
    oribtRotationSpeedRatio: 0.228,
    size: SIZE_RATIO_MULTIPLIER * 4,
    textureFile: "images/uranus.jpg",
  },
  {
    position: [5, 0, 0],
    id: "neptune",
    radiusRatio: 30.1 * RADIUS_RATIO_MULTIPLIER,
    oribtRotationSpeedRatio: 0.182,
    size: SIZE_RATIO_MULTIPLIER * 4,
    textureFile: "images/neptune.jpg",
  },
];
