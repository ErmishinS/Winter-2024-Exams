// Compare two dictionaries

'use strict';

const compare = (firstValues, ...parametersList) => {
  const secondValues = parametersList[0];
  const keysA = Object.keys(firstValues);
  const keysB = Object.keys(secondValues);

  if (keysA.join('-') !== keysB.join('-')) {
    return false;
  }

  let result = true;

  for (const key of keysA) {
    result = result && firstValues[key] === secondValues[key];
  }

  return result;
};

module.exports = compare;
