/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function (s) {
  let asterisks = 0;
  s.split('|').forEach((sub, i) => {
    if (i % 2 === 0) {
      asterisks += sub.split('').filter((c) => c === '*').length;
    }
  });
  
  return asterisks;
};
