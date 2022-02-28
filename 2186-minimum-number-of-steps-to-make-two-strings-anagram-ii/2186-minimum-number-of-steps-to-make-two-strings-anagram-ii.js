/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
const minSteps = (s, t) => {
    const LOWER_A_CHAR_CODE = 97
    let sChars = new Array(26).fill(0), tChars = new Array(26).fill(0)
    for (let i = 0; i < s.length; i++) {
        sChars[s.charCodeAt(i) - LOWER_A_CHAR_CODE]++
    }
    
    for (let i = 0; i < t.length; i++) {
        tChars[t.charCodeAt(i) - LOWER_A_CHAR_CODE]++
    }
    

    let steps = 0
    for (let i = 0; i < 26; i++) {
        steps += Math.abs(tChars[i] - sChars[i])
    }
    
    return steps
};