// Find an intersection of two dictionaries

// intersection.js is refactored, Test intersection.js: Passed: 5 of 5

'use strict';

const intersection = (object1, object2) => {
  const result = {};

  for (const attributeName of Object.keys(object1)) {
    if (object1[attributeName] === object2[attributeName]) {
      result[attributeName] = object1[attributeName];
    }
  }

  return result;
};

module.exports = intersection;
