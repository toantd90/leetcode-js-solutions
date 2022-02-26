/**
 * @param {string} s
 * @return {number}
 */
const maxLengthBetweenEqualCharacters = s => {
    let firstIndex = new Array(26).fill(-1)
    let lastIndex = new Array(26).fill(-1)
    
    for (let i = 0; i < s.length; i++) {
        const index = s.charCodeAt(i) - 97
        
        if (firstIndex[index] === -1) {
            firstIndex[index] = i
        }
        lastIndex[index] = i
    }
    
    let res = -1
    
    for (let i = 0; i < 26; i++) {
        if (firstIndex[i] === -1 || lastIndex[i] === -1) continue
        res = Math.max(res, lastIndex[i] - firstIndex[i] - 1)
    }
    
    return res
};