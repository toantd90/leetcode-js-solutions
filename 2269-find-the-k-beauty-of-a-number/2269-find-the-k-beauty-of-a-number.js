/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
const divisorSubstrings = (num, k) => {
    const str = num.toString()
    if (k > str.length) return 0
    if (k === str.length) return 1
    
    let substring = str.slice(0, k)
    let res = num % Number(substring) === 0 ? 1 : 0
    
    for (let i = k; i < str.length; i++) {
        substring = substring.slice(1, k) + str[i]
        
        res += num % Number(substring) === 0 ? 1 : 0
    }
    
    return res
};