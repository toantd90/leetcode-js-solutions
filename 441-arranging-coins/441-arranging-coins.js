/**
 * @param {number} n
 * @return {number}
 */
const arrangeCoins = n => {
    let l = 0, r = n
    
    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2)
        const sum = mid * (mid + 1) / 2
        
        if (sum === n) {
            return mid
        } else if (sum > n) {
            r = mid - 1
        } else {
            l = mid +1
        }
    }
    
    return r
    
};