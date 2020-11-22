import { minMaxScale } from "./min-max-scale";

export const normalizeSeries = (series: number[]) => {
  const min = Math.min(...series);
  const max = Math.max(...series);
  return series.map((value: number) => minMaxScale(min, max, value) * 2 - 1);
}