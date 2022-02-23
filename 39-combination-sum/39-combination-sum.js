const backtrack = (res, list, nums, start, remain) => {
    if (remain < 0) {
        return
    } else if (remain === 0) {
        res.push([...list])
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
    candidates.sort((c1, c2) => c1 - c2)
    let res = []
    backtrack(res, [], candidates, 0, target)
    
    return res
};