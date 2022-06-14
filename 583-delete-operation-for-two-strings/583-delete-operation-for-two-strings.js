/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
const minDistance = (text1, text2) => {
    const length1 = text1.length
    const length2 = text2.length
    let dp = new Array(length1 + 1).fill().map(_ => new Array(length2 + 1).fill(0))
    
    for (let i = 1; i <= length1; i++) {
        for (let j = 1; j <= length2; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }
    
    return length1 - dp[length1][length2] + length2 - dp[length1][length2]
};