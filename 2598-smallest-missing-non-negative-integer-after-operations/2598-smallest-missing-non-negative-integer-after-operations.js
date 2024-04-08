/**
 * @param {number[]} nums
 * @param {number} value
 * @return {number}
 */
function findSmallestInteger(nums, value) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0 && nums[i] >= value) {
      nums[i] -= Math.floor(nums[i] / value) * value;
    } else if (nums[i] < 0 && nums[i] < value) {
      nums[i] += Math.ceil(-nums[i] / value) * value;
    } else {
      continue;
    }
  }

  let count = {};
  for (let i = 0; i < nums.length; i++) {
    count[nums[i]] = (count[nums[i]] || 0) + 1;

    if (count[nums[i]] > 1) {
      nums[i] += value * (count[nums[i]] - 1);
    }
  }

  nums.sort((n1, n2) => n1 - n2);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }

  return nums.length;
}
