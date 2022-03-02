/**
 * @param {number[]} nums
 * @return {number[]}
 */
const frequencySort = nums => {
    let map = {}
    
    nums.forEach(num => {
        map[num] = (map[num] || 0) + 1
    })
    
    return nums.sort((a, b) => map[a] === map[b] ? b - a : map[a] - map[b])
};