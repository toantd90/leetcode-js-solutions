/**
 * @param {number[]} nums
 * @return {number}
 */
function minimumSwaps(nums) {
  const n = nums.length;
  let minIndex = n - 1;
  let maxIndex = 0;

  for (let i = 1; i <= n - 1; i++) {
    if (nums[i] >= nums[maxIndex]) {
      maxIndex = i;
    }

    if (nums[n - 1 - i] <= nums[minIndex]) {
      minIndex = n - 1 - i;
    }
  }

  if (minIndex === 0) {
    return n - 1 - maxIndex;
  } else if (maxIndex === n - 1) {
    return minIndex;
  } else if (minIndex > maxIndex) {
    return minIndex + n - 1 - maxIndex - 1;
  } else {
    return minIndex + n - 1 - maxIndex;
  }
}
