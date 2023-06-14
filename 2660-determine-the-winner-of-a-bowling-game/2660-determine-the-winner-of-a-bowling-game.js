/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
function isWinner(player1, player2) {
  let score1 = 0;
  let score2 = 0;

  for (let i = 0; i < player1.length; i++) {
    score1 +=
      player1[i - 2] === 10 || player1[i - 1] === 10
        ? 2 * player1[i]
        : player1[i];
    score2 +=
      player2[i - 2] === 10 || player2[i - 1] === 10
        ? 2 * player2[i]
        : player2[i];
  }

  return score1 === score2 ? 0 : score1 > score2 ? 1 : 2;
}
