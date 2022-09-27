/**
 * @param {string} dominoes
 * @return {string}
 */
function pushDominoes(dominoes) {
  let finalStateDominoes = [];
  let lastRightIndex = -1;
  let lastLeftIndex = -1;

  for (let i = 0; i < dominoes.length; i++) {
    finalStateDominoes[i] = dominoes[i];
    if (dominoes[i] == 'R') {
      lastRightIndex = i;
    } else if (dominoes[i] == '.') {
      if (finalStateDominoes[i - 1] == 'R') {
        finalStateDominoes[i] = 'R'
      };
    } else {
      let startFillLeft = i;
      if (lastRightIndex == -1) {
        startFillLeft = 0;
      } else if (lastLeftIndex > lastRightIndex) {
        startFillLeft = lastLeftIndex + 1;
      } else {
        let mid = lastRightIndex + Math.floor((i - lastRightIndex) / 2);
        if ((i - lastRightIndex) % 2 == 0) {
          finalStateDominoes[mid] = '.';
        }
        startFillLeft = mid + 1;
      }
      for (let j = startFillLeft; j < i; j++) {
        finalStateDominoes[j] = 'L';
      }
      lastLeftIndex = i;
    }
  }

  return finalStateDominoes.join('');
}
