/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let count = {};

    for (let num of nums) {
        count[num] = (count[num] || 0) + 1;
    }

    const sortedByFrequent = Object.entries(count).sort(([key1, value1], [key2, value2]) => value2 - value1);

    return sortedByFrequent.slice(0, k).map(([key, value]) => key);
};