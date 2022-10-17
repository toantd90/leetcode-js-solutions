/**
 * @param {number[]} nums
 * @return {number}
 */
function findMaxK(nums) {
  let maxK = -1;
  let numMap = {};
  for (let num of nums) {
    numMap[num] = true;

    if (num < 0) {
      const positiveNum = Math.abs(num);

      if (numMap[positiveNum] && positiveNum > maxK) {
        maxK = positiveNum;
      }
    } else {
      if (numMap[-num] && num > maxK) {
        maxK = num;
      }
    }
  }

  return maxK;
}
