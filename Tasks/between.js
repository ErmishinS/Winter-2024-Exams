// Extract substring between prefix and suffix

'use strict';

const getValueBetween = (str, prefix, suffix) => {
  const startIndex = str.indexOf(prefix);

  if (startIndex === -1) {
    return '';
  }

  const result = str.substring(startIndex + prefix.length);

  if (suffix) {
    const endIndex = result.indexOf(suffix);
    return endIndex !== -1 ? result.substring(0, endIndex) : '';
  }

  return result;
};

module.exports = getValueBetween;
