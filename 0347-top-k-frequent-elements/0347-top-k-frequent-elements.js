/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent(nums, k) {
    let countMap = new Map();

    for (let num of nums) {
        countMap.set(num, {
            num,
            frequent: (countMap.get(num)?.frequent || 0) + 1,
        });
    }

    return Array.from(countMap.values())
        .sort((count1, count2) => count2.frequent - count1.frequent)
        .slice(0, k)
        .map((count) => count.num);
}
