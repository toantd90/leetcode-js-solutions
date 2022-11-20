/**
 * @param {number[]} nums
 * @return {number}
 */
function minimumOperations(nums) {
  let operations = new Set();

  for (let num of nums) {
    if (num) {
      operations.add(num);
    }
  }

  return operations.size;
}
