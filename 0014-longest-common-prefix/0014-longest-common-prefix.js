/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  let longestPrefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    let prefix = "";
    for (let j = 0; j < Math.min(longestPrefix.length, strs[i].length); j++) {
      if (longestPrefix[j] !== strs[i][j]) {
        break;
      }
      prefix += strs[i][j];
    }

    if (!prefix) {
      return "";
    }

    longestPrefix = prefix;
  }

  return longestPrefix;
}