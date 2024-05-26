function canSplit(nums, k, sumOfSplit) {
  let numOfSplits = 0;
  let curSum = 0;
  let i = 0;

  while (i < nums.length) {
    while (curSum + nums[i] <= sumOfSplit) {
      curSum += nums[i];
      i++;
    }

    numOfSplits++;
    curSum = 0;

    if (numOfSplits > k) {
      return false;
    }
  }

  return numOfSplits <= k;
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function (nums, k) {
  let sum = nums.reduce((accumulation, num) => accumulation + num, 0);
  let min = Math.ceil(sum / k);
  let max = sum;

  while (min < max) {
    const mid = min + Math.floor((max - min) / 2);

    if (canSplit(nums, k, mid)) {
      max = mid;
    } else {
      min = mid + 1;
    }
  }

  return min;
};
