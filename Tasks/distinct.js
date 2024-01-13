// Return an array without duplicates

// distinct.js is refactored, Test distinct.js: Passed: 9 of 9

'use strict';

const distinct = (arr) => {
  const uniqueSet = new Set();
  
  for (const element of arr) {
    uniqueSet.add(element);
  }

  const result = Array.from(uniqueSet);
  return result
};

module.exports = distinct;
