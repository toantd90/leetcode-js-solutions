/**
 * @param {number[]} nums
 * @return {number}
 */
function semiOrderedPermutation(nums) {
  let smallestIndex = 0;
  let largestIndex = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[smallestIndex]) {
      smallestIndex = i;
    }

    if (nums[i] > nums[largestIndex]) {
      largestIndex = i;
    }
  }

  const moves = smallestIndex + nums.length - 1 - largestIndex;

  return smallestIndex > largestIndex ? moves - 1 : moves;
}
