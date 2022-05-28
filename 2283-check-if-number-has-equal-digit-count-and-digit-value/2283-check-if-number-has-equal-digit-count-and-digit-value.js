/**
 * @param {string} num
 * @return {boolean}
 */
const digitCount = num => {
    const n = num.length
    let cnt = new Array(n).fill(0)
    
    for (let i = 0; i < n; i++) {
        cnt[num[i]] += 1
    }
    
    for (let i = 0; i < n; i++) {
        if (Number(num[i]) !== cnt[i]) {
            return false
        }
    }
    
    return true
};