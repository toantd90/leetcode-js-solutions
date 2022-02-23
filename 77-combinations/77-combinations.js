const backtrack = (res, list, num, max, k) => {
    if (list.length === k) {
        res.push([...list])
    } else if (num > max) {
        return
    } else {
        for (let i = num; i <= max; i++) {
            list.push(i)
            backtrack(res, list, i + 1, max, k)
            list.pop()
        }
    }
}


/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = (n, k) => {
    let res = []
    
    backtrack(res, [], 1, n, k)
    
    return res
};