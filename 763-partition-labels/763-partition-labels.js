/**
 * @param {string} s
 * @return {number[]}
 */
const partitionLabels = s => {
    const A_CHAR_CODE = 97
    let chars = new Array(26).fill().map(_ => new Array(2).fill(-1))
    
    for (let i = 0; i < s.length; i++) {
        const charIndex = s.charCodeAt(i) - A_CHAR_CODE
        if (chars[charIndex][0] === -1) {
            chars[charIndex] = [i, i]
        } else {
            chars[charIndex][1] = i
        }
    }
    
    chars = chars.sort((char1, char2) => char1[0] - char2[0]).filter(char => char[0] !== -1)
    
    let res = []
    let [curMin, curMax] = chars[0]
    
    for (let i = 1; i < chars.length; i++) {
        if (chars[i][0] > curMax) { 
            res.push(curMax - curMin + 1)
            curMin = chars[i][0]
            curMax = chars[i][1]
            continue
        } else {
            curMax = Math.max(curMax, chars[i][1])
        }
    }
    
    res.push(curMax - curMin + 1)
    
    return res
};