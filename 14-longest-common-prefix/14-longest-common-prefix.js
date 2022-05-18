/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = strs => {
    let commonPrefix = strs[0]
    
    for (let i = 1; i < strs.length; i++) {
        let j = -1
        if (!commonPrefix || !strs[i]) return ""

        while (j < commonPrefix.length - 1 && j < strs[i].length - 1 && commonPrefix[j + 1] === strs[i][j + 1]) {
            j++
        }
        
        if (j === -1) return ""
        
        commonPrefix = commonPrefix.slice(0, j + 1)
    }
    
    return commonPrefix
};