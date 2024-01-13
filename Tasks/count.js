// Sum all number values in dict

// count.js is refactored, Test count.js: Passed: 6 of 6

'use strict';

const count = (obj) => {
  let sum = 0;
  const keys = Object.keys(obj);

  for (const key of keys) {
    const value = obj[key];
    if (typeof value === 'number') {
      sum += value;
    }
  }

  return sum;
};

module.exports = count;
