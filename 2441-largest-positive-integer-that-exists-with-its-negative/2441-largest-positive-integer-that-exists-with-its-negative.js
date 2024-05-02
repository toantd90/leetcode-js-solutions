/**
 * @param {number[]} nums
 * @return {number}
 */
function findMaxK(nums) {
    let max = -1001;

    let map = new Map();

    for (let num of nums) {
        if (map.get(-num)) {
            max = Math.max(max, num, -num);
        }
        map.set(num, true);
    }

    if (max === -1001) {
        return -1;
    }

    return max;
};