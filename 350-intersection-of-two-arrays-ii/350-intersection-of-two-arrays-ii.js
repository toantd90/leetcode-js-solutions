/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = (nums1, nums2) => {
    let map1 = {}, map2 = {}
    
    for (let num of nums1) {
        map1[num] = (map1[num] || 0) + 1
    }
    
    for (let num of nums2) {
        map2[num] = (map2[num] || 0) + 1
    }
    
    let ans = []
    
    for (let num in map1) {
        if (map2[num]) {
            const concatArr = new Array(Math.min(map1[num], map2[num])).fill(num)
            ans = [...ans, ...concatArr]
        }
    }
    
    return ans
};