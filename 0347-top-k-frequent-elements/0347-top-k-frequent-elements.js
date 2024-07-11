/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let countMap = {};

  for (let num of nums) {
    countMap[num] = (countMap[num] || 0) + 1;
  }

  const sortedFrequent = Object.entries(countMap)
    .map(([key, value]) => [key, value])
    .sort(([num1, count1], [num2, count2]) => count2 - count1);

  return sortedFrequent.slice(0, k).map(([num]) => num);
};
