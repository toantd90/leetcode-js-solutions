/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfFour = n => {
    while (n > 1) {
        n /= 4
    }
    
    return n === 1
};