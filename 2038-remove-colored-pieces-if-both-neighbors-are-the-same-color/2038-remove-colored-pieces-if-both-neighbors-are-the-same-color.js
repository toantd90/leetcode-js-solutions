/**
 * @param {string} colors
 * @return {boolean}
 */
function winnerOfGame(colors) {
  let aTurn = 0;
  let bTurn = 0;
  for (let i = 0; i < colors.length; i++) {
    let j = i;
    while (j < colors.length && colors[j] === "A") {
      j++;
    }

    aTurn += j - i > 2 ? j - i - 2 : 0;

    i = j;

    while (j < colors.length && colors[j] === "B") {
      j++;
    }

    bTurn += j - i > 2 ? j - i - 2 : 0;

    i = j - 1;
  }
  
  return aTurn > bTurn;
}
