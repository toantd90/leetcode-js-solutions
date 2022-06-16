/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    let charCount = {}
    
    for (let c of s) {
        charCount[c] = (charCount[c] || 0) + 1
    }
    
    let odd = 0
    let values = Object.values(charCount)
    
    for (let i = 0; i < values.length; i++) {
        if (values[i] % 2 === 1) odd++
        if (odd > 1) return false
    }
        
    return true
};