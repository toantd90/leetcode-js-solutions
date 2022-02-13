/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const targetIndices = (nums, target) => {
    nums.sort((n1, n2) => n1 - n2)
    
    let res = []
    
    nums.forEach((num, index) => {
        if (num === target) {
            res.push(index)
        }
    })
    
    return res
};