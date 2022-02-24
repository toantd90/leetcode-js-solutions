const backtrack = (res, list, nums) => {
    if (list.length === nums.length) {
        res.push([...list])
    } else {
        for (let i = 0; i < nums.length; i++) {
            if (list.includes(nums[i])) continue
            list.push(nums[i])
            backtrack(res, list, nums)
            list.pop()
        }
    }
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = nums => {
    let res = []
    
    backtrack(res, [], nums)
    
    return res
};