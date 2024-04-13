import { test, expect } from 'vitest';
import { fetchRandomUser } from '../src/async';


test('fetchRandomUser doit rendrer des données de  User Generator API', async () => {
  try {

    const user = await fetchRandomUser();


    expect(user).toBeDefined();
    expect(typeof user).toBe('object');
    expect(user).toHaveProperty('gender');
    expect(user).toHaveProperty('name');
    expect(user).toHaveProperty('location');
    expect(user).toHaveProperty('email');


  } catch (error) {
    fail('Error');
  }
});11
