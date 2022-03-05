/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
const mostFrequent = (nums, key) => {
    let map = {}
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === key) {
            map[nums[i + 1]] = (map[nums[i + 1]] || 0) + 1
        }
    }
    
    const entries = Object.entries(map).map(([key, value]) => ([key, value]))
    entries.sort((e1, e2) => e2[1] - e1[1])
    return Number(entries[0][0])
};