// Merge two dictionaries

// merge.js is refactored, Test merge.js: Passed: 6 of 6

'use strict';

const mergeTwoObjects = (object1, object2) => {
  const mergedDict = {};

  for (const attributeName of Object.keys(object1)) {
    mergedDict[attributeName] = object1[attributeName];
  }

  for (const attributeName of Object.keys(object2)) {
    mergedDict[attributeName] = object2[attributeName];
  }

  return mergedDict;
};

module.exports = mergeTwoObjects;
