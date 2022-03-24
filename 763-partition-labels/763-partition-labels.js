/**
 * @param {string} s
 * @return {number[]}
 */
const partitionLabels = s => {
    let chars = {}
    
    for (let i = 0; i < s.length; i++) {
        if (!chars[s[i]]) {
            chars[s[i]] = [i, i]
        } else {
            chars[s[i]][1] = i
        }
    }
    
    const allChars = Object.values(chars).sort((char1, char2) => char1[0] - char2[0])
    
    let res = []
    let [curMin, curMax] = allChars[0]
    
    for (let i = 1; i < allChars.length; i++) {
        if (allChars[i][0] > curMax) { 
            res.push(curMax - curMin + 1)
            curMin = allChars[i][0]
            curMax = allChars[i][1]
        } else {
            curMax = Math.max(curMax, allChars[i][1])
        }
    }
    
    res.push(curMax - curMin + 1)
    
    return res
};