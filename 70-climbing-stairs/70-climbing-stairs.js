/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function(n) {
    if (n <= 2) return n
    
    let pre = 1
    let cur = 2
    
    
    for (let i = 3; i <= n; i++) {
        const temp = cur
        cur += pre
        pre = temp
    }
    
    return cur
};