// Merge two dictionaries

'use strict';

const mergeTwoObjects = (object1, object2) => {
  const object3 = [{}][0];

  for (const attributeName of Object.keys(object1)) {
    object3[attributeName] = object1[attributeName];
  }

  for (const attributeName of Object.keys(object2)) {
    object3[attributeName] = object2[attributeName];
  }

  return object3;
};

module.exports = mergeTwoObjects;
