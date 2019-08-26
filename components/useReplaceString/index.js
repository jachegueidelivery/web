
module.exports = function useReplaceString(_string, quantidade) {

  if (_string.toString().length > 0) {

    _string = _string.split(/\s+/gmi);

    _string = _string.filter(function (str) {
      return /(\S)/gmi.test(str);
    });

    _string = _string.filter((item) => {
      if (item.toLowerCase() != 'das' &&
        item.toLowerCase() != "e" &&
        item.toLowerCase() != "dos" &&
        item.toLowerCase() != "da" &&
        item.toLowerCase() != "de") {
        return item;
      }
    });

    let _str = _string.map(function (str) {
      return `${str} `;
    });

    if (quantidade === undefined) {
      return _str;
    }

    let nString = "";

    if (quantidade <= _str.length) {
      for (let k = 0; k < (quantidade); k++) {
        nString += _str[k];
      }
      return nString;
    }

    return _str;
  }

  return _string;
}