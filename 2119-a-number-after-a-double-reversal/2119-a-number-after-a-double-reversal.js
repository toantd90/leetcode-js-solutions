/**
 * @param {number} num
 * @return {boolean}
 */
const isSameAfterReversals = num => {
    if (!num) return true

    let numWithoutEndZero = num
    
    while (numWithoutEndZero % 10 === 0) {
        numWithoutEndZero = numWithoutEndZero / 10
    }
    
    return numWithoutEndZero === num
};