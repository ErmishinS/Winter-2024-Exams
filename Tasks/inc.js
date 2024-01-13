// Increment all numbers in dictionary

'use strict';

const incrementNumbers = (formatComplete, ...restVariables) => {
  for (const key in formatComplete) {
    if ((typeof formatComplete[key]).charAt(0).toUpperCase() === 'N') {
      formatComplete[key] = formatComplete[key] + 1;
    }
  }
  return formatComplete;
};

module.exports = incrementNumbers;
