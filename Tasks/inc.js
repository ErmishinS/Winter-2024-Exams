// Increment all numbers in dictionary

// inc.js is refactored, Test inc.js: Passed: 4 of 4

'use strict';

const incNumbers = (formatComplete, ...restVariables) => {
  for (const key in formatComplete) {
    if (typeof formatComplete[key] === 'number') {
      formatComplete[key]++;
    }
  }

  return formatComplete;
};

module.exports = incNumbers;
