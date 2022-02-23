const backtrack = (res, list, nums, start, remain) => {
    if (remain === 0) {
        res.push([...list])
    } else if (remain < 0) {
        return
    } else {
        for (let i = start; i < nums.length; i++) {
            list.push(nums[i])
            backtrack(res, list, nums, i, remain - nums[i])
            list.pop()
        }
    }
}

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = (candidates, target) => {
    let res = []
    
    backtrack(res, [], candidates, 0, target)
    
    return res
};