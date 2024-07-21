/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function (s) {
  let count = {};

  for (let letter of s) {
    count[letter] = (count[letter] || 0) + 1;
  }

  return Object.values(count).reduce((accumulation, each) => {
    return accumulation + (each > 1 ? (each % 2 === 0 ? 2 : 1) : each);
  }, 0);
};
