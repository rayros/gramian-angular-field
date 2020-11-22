import { gadf, gasf } from "./gaf-value";

import Jimp from "jimp";
import { normalizeSeries } from "./normalize-series";
import { rgbValues } from "./rgb-values";

export const gramianAngularField = (series: number[], method: 'summation' | 'difference' = 'summation'): Jimp => {
  const image = new Jimp(series.length, series.length)
  const w = image.getWidth();
  const h = image.getHeight();
  const seriesNormalized = normalizeSeries(series)
  return image.scanQuiet(0, 0, w, h, function (x, y, idx) {
    const dot = (method === 'summation' ? gasf : gadf)(seriesNormalized[x], seriesNormalized[y]);
    const [red, green, blue] = rgbValues(-1, 1, dot);
    this.bitmap.data[idx + 0] = red;
    this.bitmap.data[idx + 1] = green;
    this.bitmap.data[idx + 2] = blue;
    this.bitmap.data[idx + 3] = 255;
  })
};