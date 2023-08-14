/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findKthLargest(nums, k) {
  const sortedNum = nums.sort((n1, n2) => n2 - n1)
  return nums[k - 1]
};