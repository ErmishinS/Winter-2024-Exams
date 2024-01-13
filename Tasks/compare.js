// Compare two dictionaries

// compare.js is refactored, Test compare.js: Passed: 7 of 7

'use strict';

const compare = (firstValues, ...parametersList) => {
  const secondValues = parametersList[0];
  const keysA = Object.keys(firstValues);
  const keysB = Object.keys(secondValues);

  if (keysA.join('-') !== keysB.join('-')) {
    return false;
  }

  return keysA.every((key) => firstValues[key] === secondValues[key]);
};

module.exports = compare;
