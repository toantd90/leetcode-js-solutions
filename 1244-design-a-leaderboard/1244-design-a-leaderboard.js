
var Leaderboard = function() {
  this.leaderBoard = {}
};

/** 
 * @param {number} playerId 
 * @param {number} score
 * @return {void}
 */
Leaderboard.prototype.addScore = function(playerId, score) {
  this.leaderBoard[playerId] = (this.leaderBoard[playerId] || 0) + score
};

/** 
 * @param {number} K
 * @return {number}
 */
Leaderboard.prototype.top = function(K) {
  const scores = Object.values(this.leaderBoard).sort((score1, score2) => score2 - score1)
  
  let sum = 0
  for (let i = 0; i < K; i++) {
    sum += scores[i]
  }
  
  return sum
};

/** 
 * @param {number} playerId
 * @return {void}
 */
Leaderboard.prototype.reset = function(playerId) {
  delete this.leaderBoard[playerId]
};

/** 
 * Your Leaderboard object will be instantiated and called as such:
 * var obj = new Leaderboard()
 * obj.addScore(playerId,score)
 * var param_2 = obj.top(K)
 * obj.reset(playerId)
 */