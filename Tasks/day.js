// Get day number

'use strict';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (inputString) => {
  let dayNumber;

  for (dayNumber = 0; dayNumber < daysOfWeek.length; dayNumber++) {
    if (inputString.startsWith(daysOfWeek[dayNumber].toLowerCase())) {
      return dayNumber + 1;
    }
  }

  return -1;
};

module.exports = parseDay;
