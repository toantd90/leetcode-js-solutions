/**
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = (nums) => {
  let l = 0;
  let r = nums.length - 1;

  // Intuition
  // while (l <= r) {
  //   const mid = Math.floor((l + r) / 2);

  //   if (
  //     nums[mid] > (nums[mid + 1] || -2e31) &&
  //     nums[mid] > (nums[mid - 1] || -2e31)
  //   ) {
  //     return mid;
  //   } else if (nums[mid - 1] > nums[mid + 1]) {
  //     r = mid - 1;
  //   } else {
  //     l = mid + 1;
  //   }
  // }

  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);

    if (nums[mid] < nums[mid + 1]) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return l;
};
