/**
 * @param {number[]} nums
 * @return {number}
 */
const findUnsortedSubarray = nums => {
    const sorted = [...nums].sort((n1, n2) => n1 - n2)
    let l, r
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== sorted[i]) {
            if (l === undefined) l = i
            r = i
        }
    }
    
    return l !== undefined ? r - l + 1 : 0
};