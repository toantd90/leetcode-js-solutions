/**
 * @param {number[]} nums
 * @param {number} value
 * @return {number}
 */
function findSmallestInteger(nums, value) {
  let count = {};
  for (let num of nums) {
    const remainder = (value + num % value) % value;
    count[remainder] = (count[remainder] || 0) + 1;
  }
  
  for (let i = 0; i < nums.length; i++) {
    if (!count[i % value] || count[i % value] < 0) {
      return i;
    }
    count[i % value]--;
  }

  

  return nums.length;
}
