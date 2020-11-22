import { gasf } from '../src/gaf-value';
test('dot value', () => {
  expect(gasf(1, 1)).toStrictEqual(1);  
  expect(gasf(-1, 1)).toStrictEqual(-1);  
  expect(gasf(-1, -1)).toStrictEqual(1);  
  expect(gasf(0, 0)).toStrictEqual(-1);  
  expect(gasf(0.5, 0.5).toFixed(2)).toStrictEqual('-0.50');  
})