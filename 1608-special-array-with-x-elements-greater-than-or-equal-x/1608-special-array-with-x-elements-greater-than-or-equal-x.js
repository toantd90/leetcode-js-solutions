/**
 * @param {number[]} nums
 * @return {number}
 */
function specialArray(nums) {
  for (let num = 1; num <= nums.length; num++) {
    let greaterThanNum = 0;

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] >= num) {
        greaterThanNum++;
        if (greaterThanNum > num) {
          break;
        }
      }
    }

    if (greaterThanNum === num) {
      return num;
    }
  }

  return -1;
}
