/**
 * @param {string} s
 * @return {boolean}
 */
const repeatedSubstringPattern = s => {
    const l = s.length
    for (let i = 1; i <= Math.floor(l / 2) ; i++) {
       if (l % i === 0) {
           if (s.substring(0, i).repeat(l / i) === s) return true
       }
    }
    
    return false
};