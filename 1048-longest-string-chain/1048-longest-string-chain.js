/**
 * @param {string[]} words
 * @return {number}
 */
const longestStrChain = words =>  {
    let dp = {}
    words.sort((w1, w2) => w1.length - w2.length)
    let longest = 1
    
    
    for (let word of words) {
        let curLen = 1
        
        for (let i = 0; i < word.length; i++) {
            let tmp = word.slice(0, i) + word.slice(i + 1)
            let preLen = dp[tmp] || 0
            curLen = Math.max(curLen, preLen + 1)
        }
        
        dp[word] = curLen
        longest = Math.max(longest, curLen)
    }
    
    return longest
};