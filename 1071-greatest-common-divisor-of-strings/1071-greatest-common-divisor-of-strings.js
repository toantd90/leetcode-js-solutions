/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
function gcdOfStrings(str1, str2) {
  for (let i = str2.length - 1; i >= 0; i--) {
    const currentStr = str2.slice(0, i + 1);

    if (
      str1.length % (i + 1) == 0 &&
      currentStr.repeat(str1.length / (i + 1)) == str1 &&
      str2.length % (i + 1) == 0 &&
      currentStr.repeat(str2.length / (i + 1)) == str2
    ) {
      return currentStr;
    }
  }

  return '';
}
