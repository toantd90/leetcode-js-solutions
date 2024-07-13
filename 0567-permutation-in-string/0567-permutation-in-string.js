/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = (s1, s2) => {
    let count = new Array(26).fill(0)
    const s1Len = s1.length
    
    for (let i = 0; i < s1Len; i++) {
        count[s1.charCodeAt(i) - 97]++
        count[s2.charCodeAt(i) - 97]--
    }
    
    if (isAllZero(count)) return true
    
    for (let i = s1Len; i < s2.length; i++) {
       count[s2.charCodeAt(i - s1Len) - 97]++
       count[s2.charCodeAt(i) - 97]--
        
       if (isAllZero(count)) return true
    }
    
    return false
    
};

const isAllZero = arr => arr.every(el => el === 0)