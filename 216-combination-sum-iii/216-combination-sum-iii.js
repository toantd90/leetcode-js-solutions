/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
const combinationSum3 = (k, n) => {
    let result = []
    const combination = (list, sum, start) => {
        if (sum > n) return
        if (sum === n && list.length === k) {
            result.push([...list])
            return
        }

        for (let i = start; i <= 9; i++) {
            list.push(i)
            combination(list, sum + i, i + 1)
            list.pop()
        }
    }
    
    combination([], 0, 1)
    
    return result
};