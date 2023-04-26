/**
 * @param {number[]} nums
 * @return {number[]}
 */
function separateDigits(nums) {
  let ans = [];
  for (let num of nums) {
    ans.push(...num.toString().split('').map(Number));
  }

  return ans;
}
