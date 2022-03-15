/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = n => {
    while (n > 1) {
        n /= 3
    }
    
    return n === 1
}