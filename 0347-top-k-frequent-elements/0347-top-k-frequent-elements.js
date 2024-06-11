/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const n = nums.length;
    let count = new Map();

    for (let num of nums) {
        if (!count.get(num)) {
            count.set(num, 1);
        } else {
            count.set(num, count.get(num) + 1);
        }
    }

    let bucket = new Array(n + 1).fill().map((_) => new Array());
    
    count.forEach((value, key) => {
        bucket[value].push(key);
    });

    let result = []
    for (let i = n; i > 0; i--) {
        if (bucket[i].length > 0) {
            result.push(...bucket[i]);

            if (result.length >= k) {
                break;
            }
        }
    }

    return result;
};