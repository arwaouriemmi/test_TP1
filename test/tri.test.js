
import { test, expect } from 'vitest';
import { tri} from '../src/tri';

test('Test avec un tableau vide', () => {
  const result = tri([]);
  expect(result).toEqual([]);
});


test('Test avec un tableau non trié', () => {
  const result = tri([5, 1, 8, 2, 7, 9, 3, 6]);
  expect(result).toEqual([1, 2, 3, 5, 6, 7, 8, 9]);
});

test('Test avec un tableau déjà trié', () => {
  const result = tri([1, 2, 3, 4, 5]);
  expect(result).toEqual([1, 2, 3, 4, 5]);
});


test('Test avec un tableau inversé', () => {
  const result = tri([5, 4, 3, 2, 1]);
  expect(result).toEqual([1, 2, 3, 4, 5]);
});


test('Test avec un tableau contenant des éléments non numériques', () => {
  const result = tri([3, 'a', 1, 2, 'r']);
  expect(result).toEqual([1, 2, 3, 'a', 'r']);
});
