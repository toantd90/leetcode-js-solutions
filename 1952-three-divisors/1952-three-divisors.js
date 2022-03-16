/**
 * @param {number} n
 * @return {boolean}
 */
const isThree = n => {
    let divisor = 0
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) divisor++
    }
    
    return divisor === 3
};