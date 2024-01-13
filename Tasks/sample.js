// Get one random element from an array

'use strict';

const getRandomElement = (arr) => {
  arr = arr[Math.floor(Math.random() * arr.length)];
  
  return arr;
};

module.exports = getRandomElement;
