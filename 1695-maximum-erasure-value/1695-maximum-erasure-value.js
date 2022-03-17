/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumUniqueSubarray = nums => {
  let l = 0,
    r = 0,
    count = {},
    cur = 0,
    max = 0;

  while (r < nums.length) {
    if (count[nums[r]] === 1) {
      while (count[nums[r]] === 1) {
        cur -= nums[l];
        count[nums[l]]--;
        l++;
      }
    } else {
      count[nums[r]] = 1;
      cur += nums[r];
      max = Math.max(max, cur);
      r++;
    }
  }

  return max;
};
