/**
 * @param {string} s
 * @return {number}
 */
const minimumMoves = s => {
    let cnt = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'X') {
            i+=2
            cnt++
        }
    }
    
    return cnt
};