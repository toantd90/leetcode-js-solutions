/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
    let upper = new Array(26).fill(0)
    let lower = new Array(26).fill(0)
    for (let i = 0; i < s.length; i++) {
        const charCode = s.charCodeAt(i)
        if (charCode >= 97) {
            lower[charCode - 97] = 1
        } else {
            upper[charCode - 65] = 1
        }
    }
    
    for (let i = 25; i >= 0; i--) {
        if (lower[i] && upper[i]) {
            return String.fromCharCode(65 + i)
        }
    }
    
    return ''
};