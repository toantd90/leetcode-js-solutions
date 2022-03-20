/**
 * @param {number[]} nums
 * @return {number}
 */
const countHillValley = (nums) => {
  let uniqueNums = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    const topEle = uniqueNums[uniqueNums.length - 1];
    if (nums[i] !== topEle) uniqueNums.push(nums[i]);
  }

  let cnt = 0;
  for (let i = 1; i < uniqueNums.length - 1; i++) {
    if (
      (uniqueNums[i] > uniqueNums[i - 1] &&
        uniqueNums[i] > uniqueNums[i + 1]) ||
      (uniqueNums[i] < uniqueNums[i - 1] && uniqueNums[i] < uniqueNums[i + 1])
    )
      cnt++;
  }

  return cnt;
};
