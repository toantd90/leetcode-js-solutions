/**
 * @param {number[]} score
 * @return {string[]}
 */
function findRelativeRanks(scores) {
  const sortedScores = [...scores].sort((s1, s2) => s2 - s1);
  let rankMap = {};

  for (let i = 0; i < scores.length; i++) {
    if (i === 0) {
      rankMap[sortedScores[i]] = 'Gold Medal';
    } else if (i === 1) {
      rankMap[sortedScores[i]] = 'Silver Medal';
    } else if (i === 2) {
      rankMap[sortedScores[i]] = 'Bronze Medal';
    } else {
      rankMap[sortedScores[i]] = `${i + 1}`;
    }
  }

  return scores.map((score) => rankMap[score]);
}
