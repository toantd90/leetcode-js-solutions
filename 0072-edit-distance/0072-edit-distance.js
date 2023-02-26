/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
function minDistance(word1, word2) {
  let dp = new Array(word1.length + 1).fill().map(_ => new Array(word2.length + 1))
  
  dp[0][0] = 0
  
  for (let i = 1; i < word1.length + 1; i++) {
    dp[i][0] = i
  }
  
  for (let i = 1; i < word2.length + 1; i++) {
    dp[0][i] = i
  }
  
  for (let i = 1; i < word1.length + 1; i++) {
    for (let j = 1; j < word2.length + 1; j++) {
      if (word1[i - 1] == word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1
      }
    }
  }
  
  return dp[word1.length][word2.length]
};