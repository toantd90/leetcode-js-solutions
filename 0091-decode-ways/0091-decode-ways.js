/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (s[0] === '0') return 0
    
    let first = 1
    let last = 1
    
    for (let i = 2; i <= s.length; i++) {
        let temp = 0
        if (s[i - 1] !== '0') {
            temp += last
        }
        
        if (Number(s[i - 2] + '' + s[i - 1]) <= 26 && s[i - 2] !== '0') {
            temp += first
        }
        
        first = last
        last = temp
    }
    
    return last
};