export function tri(arr) {
    const numerics = arr.filter(item => typeof item === 'number');
    const nonNumerics = arr.filter(item => typeof item !== 'number');
    const sortedNumerics = numerics.slice().sort((a, b) => a - b);
    return sortedNumerics.concat(nonNumerics);
  }
