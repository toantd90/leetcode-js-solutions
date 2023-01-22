/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */
function sortTheStudents(score, k) {
  score.sort((score1, score2) => score2[k] - score1[k])
  return score
}
