/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = x => {
    let l = 0, r = x
    
    
    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2)
        
        if (mid * mid === x) {
            return mid
        } else if (mid * mid > x) {
            r = mid - 1
        } else {
            l = mid + 1
        }
    }
    
    return l - 1
};