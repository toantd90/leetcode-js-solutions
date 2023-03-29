/**
 * @param {string} currentState
 * @return {string[]}
 */
function generatePossibleNextMoves(currentState) {
  let doublePlusIndex = currentState.indexOf('++');
  let nextMoves = [];

  while (doublePlusIndex !== -1) {
    nextMoves.push(
      currentState.slice(0, doublePlusIndex) +
        '--' +
        currentState.slice(doublePlusIndex + 2)
    );

    doublePlusIndex = currentState.indexOf('++', doublePlusIndex + 1);
  }

  return nextMoves;
}
