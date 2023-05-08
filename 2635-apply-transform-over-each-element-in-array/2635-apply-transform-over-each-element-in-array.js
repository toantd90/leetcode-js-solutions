/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  let ans = [];

  arr.forEach((el, i) => {
    ans.push(fn(el, i));
  });

  return ans;
};
