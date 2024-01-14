// Extract substring between prefix and suffix

// between.js is refactored, Test between.js: Passed: 3 of 3

'use strict';

const getValueBetween = (str, prefix, suffix) => {
  const startIndex = str.indexOf(prefix);

  if (startIndex === -1) {
    return '';
  }

  const position = startIndex + prefix.length;
  const substring = str.substring(position);

  return suffix ? substring.substring(0, substring.indexOf(suffix)) : substring;
};

module.exports = getValueBetween;
