import { test, expect } from 'vitest';
import { transform } from '../src/chaine';

test('Test avec une chaîne vide', () => {
  const result = transform('');
  expect(result).toBe('');
});


test('Test avec une chaîne en minuscules', () => {
  const result = transform('hello');
  expect(result).toBe('HELLO');
});


test('Test avec une chaîne avec des caractères spéciaux', () => {
  const result = transform('@#arwa2001');
  expect(result).toBe('@#ARWA2001');
});
