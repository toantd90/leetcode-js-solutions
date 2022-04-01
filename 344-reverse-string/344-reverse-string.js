/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = s => {
    let l = 0
    let r = s.length - 1
    
    while (l < r) {
        [s[l], s[r]] = [s[r], s[l]]
        l++
        r--
    }
};