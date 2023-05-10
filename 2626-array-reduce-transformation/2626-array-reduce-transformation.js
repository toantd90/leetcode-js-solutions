/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  let result = init;

  for (let num of nums) {
    result = fn(result, num);
  }

  return result;
};
