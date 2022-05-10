/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
const combinationSum3 = (k, n) => {
    let result = []
    const backtrack = (list, sum, start) => {
        if (sum > n) {
            return
        } else if (sum === n) {
            if (list.length === k) {
                result.push(list)
            }
            return
        } else {
            for (let i = start + 1; i <= 9; i++) {
                backtrack([...list].concat(i), sum + i, i)
            }
        }
    }
    
    backtrack([], 0, 0)
    
    return result
};