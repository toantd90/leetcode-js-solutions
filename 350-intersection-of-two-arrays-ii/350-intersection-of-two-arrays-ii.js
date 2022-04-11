/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = (nums1, nums2) => {
    let map1 = {}
    
    for (let num of nums1) {
        map1[num] = (map1[num] || 0) + 1
    }
    
    let ans = []
    
    for (let num of nums2) {
        if (map1[num]) {
            map1[num]--
            ans.push(num)
        }
    }
    
    return ans
};