/**
 * @param {number} num
 * @return {number}
 */
function minimumSum(num) {
  let nums = [];

  for (let i = 0; i < 4; i++) {
    nums.push(num % 10);

    num = Math.floor(num / 10);
  }

  nums.sort();

  return (nums[0] + nums[1]) * 10 + nums[2] + nums[3];
}
