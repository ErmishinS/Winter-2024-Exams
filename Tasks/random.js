// Generate random integer value in given range

// random.js is refactored, Test random.js: Passed: 3 of 3

'use strict';

const getRandomInteger = (min, max) => {
  return min + Math.floor(Math.random() * (max - min + 1));
};

module.exports = getRandomInteger;
