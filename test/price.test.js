import { test, expect } from 'vitest';
import { isPriceInRange} from '../src/price';


test('Test lorsque le prix est égal à la limite inférieure', () => {
  const result = isPriceInRange(10, 10, 20);
  expect(result).toBe(true);
});


test('Test lorsque le prix est égal à la limite supérieure', () => {
  const result = isPriceInRange(20, 10, 20);
  expect(result).toBe(true);
});


test('Test lorsque le prix est entre la limite inférieure et la limite supérieure ', () => {
  const result = isPriceInRange(18, 10, 20);
  expect(result).toBe(true);
});

test('Test lorsque le prix est inférieur à la limite inférieure ', () => {
  const result = isPriceInRange(3, 10, 20);
  expect(result).toBe(false);
});


test('Test lorsque le prix est supérieur à la limite supérieure ', () => {
  const result = isPriceInRange(30, 10, 20);
  expect(result).toBe(false);
});
