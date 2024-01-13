// Extract substring between prefix and suffix

'use strict';

const getValueBetween = (str, prefix, suffix) => {
  const startIndex = str.indexOf(prefix);

  if (startIndex === -1) {
    return '';
  }

  const offset = startIndex + prefix.length;
  let result = str.substring(offset);

  if (suffix) {
    const endIndex = result.indexOf(suffix);

    if (endIndex !== -1) {
      return result.substring(0, endIndex);
    } else {
      return '';
    }
  }

  return result;
};

module.exports = getValueBetween;
