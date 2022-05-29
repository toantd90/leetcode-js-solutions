/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = strs => {
    let cnt = {}
    for (let str of strs) {
        const orderStr = str.split('').sort().join('')
        if (!cnt[orderStr]) {
            cnt[orderStr] = []
        }
        
        cnt[orderStr].push(str)
    }
    
    let ans = []
    Object.values(cnt).forEach(group => ans.push(group))
    
    return ans
};