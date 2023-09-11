/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function maxSubsequence(nums, k) {
  let cloneNums = nums.map((num, index) => [num, index]);

  cloneNums.sort((num1, num2) => {
    if (num1[0] > num2[0]) {
      return -1;
    } else {
      return 1;
    }
  });

  return cloneNums
    .slice(0, k)
    .sort((num1, num2) => {
      if (num1[1] > num2[1]) {
        return 1;
      } else {
        return -1;
      }
    })
    .map((num) => num[0]);
}
