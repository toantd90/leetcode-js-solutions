function getNextPosition(currentPosition, nextMove) {
  const MOVES = { R: [0, 1], L: [0, -1], U: [-1, 0], D: [1, 0] };

  return [
    currentPosition[0] + MOVES[nextMove][0],
    currentPosition[1] + MOVES[nextMove][1],
  ];
}

/**
 * @param {string} moves
 * @return {boolean}
 */
function judgeCircle(moves) {
  let currentPosition = [0, 0];

  for (let move of moves) {
    currentPosition = getNextPosition(currentPosition, move);
  }

  return currentPosition[0] === 0 && currentPosition[1] === 0;
}
