// Get one random element from an array

'use strict';

const getRandomElement = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

module.exports = getRandomElement;
