/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
const combinationSum3 = (k, n) => {
    let result = []
    const backtrack = (list, sum, start) => {
        if (sum > n) return
        if (sum === n && list.length === k) {
            result.push(list)
            return
        }

        for (let i = start; i <= 9; i++) {
            backtrack([...list, i], sum + i, i + 1)
        }
    }
    
    backtrack([], 0, 1)
    
    return result
};