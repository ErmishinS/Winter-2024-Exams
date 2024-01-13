// Extract substring between prefix and suffix

'use strict';

const getValueBetween = (text, prefix, suffix) => {
  let startIndex = text.indexOf(prefix);

  if (startIndex === -1) {
    return '';
  }

  let offset = startIndex + prefix.length;
  text = text.substring(offset);

  if (suffix) {
    startIndex = text.indexOf(suffix);

    if (startIndex === -1) {
      return '';
    } else {
      text = text.substring(0, startIndex);
    }
  }

  return text;
};

module.exports = getValueBetween;
