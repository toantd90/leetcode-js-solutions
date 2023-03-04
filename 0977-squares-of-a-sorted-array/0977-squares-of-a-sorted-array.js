/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = (nums) => {
  const n = nums.length;
  let left = 0;
  let right = n - 1;
  let result = new Array(n);

  for (let i = n - 1; i >= 0; i--) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      result[i] = Math.pow(nums[left++], 2);
    } else {
      result[i] = Math.pow(nums[right--], 2);
    }
  }

  return result;
};
