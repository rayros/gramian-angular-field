import hslToRgb from '@f/hsl-to-rgb'
import { minMaxScale } from "./min-max-scale";

export const rgbValues = (minimum: number, maximum: number, value: number) => {
  const ratio = minMaxScale(minimum, maximum, value);
  return hslToRgb(ratio * 300, 1, 0.50); 
}
