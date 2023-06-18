/**
 * @param {number[]} nums
 * @return {number}
 */
function findValueOfPartition(nums) {
  nums.sort((n1, n2) => n1 - n2);

  let minPartitionValue = 1e9;

  for (let i = 1; i < nums.length; i++) {
    minPartitionValue = Math.min(minPartitionValue, nums[i] - nums[i - 1]);
  }

  return minPartitionValue;
}
