import { rgbValues } from "../src/rgb-values"

test('rgb values', () => {
  expect(rgbValues(-1, 1, 1)).toStrictEqual([255, 0, 255]);
  expect(rgbValues(-1, 1, 0)).toStrictEqual([0, 255, 128]);
  expect(rgbValues(-1, 1, -1)).toStrictEqual([255, 0, 0]);
})