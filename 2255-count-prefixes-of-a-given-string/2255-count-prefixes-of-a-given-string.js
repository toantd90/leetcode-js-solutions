/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
const countPrefixes = (words, s) => {
    let cnt = 0
    for (let word of words) {
        if (s.indexOf(word) === 0) {
            cnt++
        }
    }
    
    return cnt++
};