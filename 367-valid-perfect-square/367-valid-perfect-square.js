/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = num => {
    let l = 0, r = num
    
    
    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2)
        
        if (mid * mid === num) {
            return true
        } else if (mid * mid > num) {
            r = mid - 1
        } else {
            l = mid + 1
        }
    }
    
    return false
};