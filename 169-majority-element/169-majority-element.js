/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = nums => {
    const n = nums.length
    let map = {}
    
    for (let num of nums) {
        map[num] = (map[num] || 0) + 1
    }
    
    let keys = Object.keys(map)
    
    for (let i = 0; i < keys.length; i++) {
        if (map[keys[i]] > n / 2) {
            return keys[i]
        }
    }
};