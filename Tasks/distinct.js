// Return an array without duplicates

'use strict';

const distinct = (arr) => {
  const uniqueSet = new Set();
  
  for (let currentIndex = 0; currentIndex < arr.length; currentIndex++) {
    const currentValue = arr[currentIndex];

    if (uniqueSet.has(currentValue)) {
      delete arr[currentIndex];
    } else {
      uniqueSet.add(currentValue);
    }
  }

  return arr.filter(element => typeof element === 'number');
};

module.exports = distinct;
