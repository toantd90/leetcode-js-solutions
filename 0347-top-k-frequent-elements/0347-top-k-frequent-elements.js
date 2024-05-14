/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent(nums, k) {
  let count = new Map();

  for (let num of nums) {
    count.set(num, (count.get(num) || 0) + 1);
  }

  return Array.from(count.entries())
    .map(([key, value]) => [key, value])
    .sort((count1, count2) => count2[1] - count1[1])
    .slice(0, k)
    .map((count) => count[0]);
}
