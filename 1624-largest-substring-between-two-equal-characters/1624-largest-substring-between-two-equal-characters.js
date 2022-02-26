/**
 * @param {string} s
 * @return {number}
 */
const maxLengthBetweenEqualCharacters = s => {
    let firstIndex = new Array(26).fill(-1)
    let res = -1
    
    
    for (let i = 0; i < s.length; i++) {
        const index = s.charCodeAt(i) - 97
        
        if (firstIndex[index] === -1) {
            firstIndex[index] = i
        } else {
            res = Math.max(res, i - firstIndex[index] - 1)
        }
    }
    
    return res
};