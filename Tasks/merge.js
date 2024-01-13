// Merge two dictionaries

// merge.js is refactored, Test merge.js: Passed: 6 of 6

'use strict';

const mergeTwoObjects = (object1, object2) => {
  const merged_dict = {};

  for (const attributeName of Object.keys(object1)) {
    merged_dict[attributeName] = object1[attributeName];
  }

  for (const attributeName of Object.keys(object2)) {
    merged_dict[attributeName] = object2[attributeName];
  }

  return merged_dict;
};

module.exports = mergeTwoObjects;
