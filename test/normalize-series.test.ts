import { normalizeSeries } from "../src/normalize-series"

test('normalize series', () => {
  expect(normalizeSeries([1, 0, 1])).toStrictEqual([1, -1, 1]);
  expect(normalizeSeries([0, 1, 1])).toStrictEqual([-1, 1, 1]);
  expect(normalizeSeries([0, 2, 1])).toStrictEqual([-1, 1, 0]);

})