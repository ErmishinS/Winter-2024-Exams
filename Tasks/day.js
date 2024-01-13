// Get day number

// day.js is refactored, Test day.js: Passed: 5 of 5

'use strict';

const daysOfWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const parseDay = (inputString) => {
  let dayNumber = -1;

  for (const day of daysOfWeek) {
    if (inputString.startsWith(day)) {
      dayNumber = daysOfWeek.indexOf(day) + 1;
      break;
    }
  }

  return dayNumber;
};

module.exports = parseDay;
