if (!Array.prototype.last) {
  Array.prototype.last = function () {
    return this[this.length - 1];
  };
}

/**
 * @param {string} dominoes
 * @return {string}
 */
function pushDominoes(dominoes) {
  let finalStateDominoes = [];
  let lastRightIndex = -1;
  let lastLeftIndex = -1

  for (let i = 0; i < dominoes.length; i++) {
    if (dominoes[i] == 'R') {
      lastRightIndex = i;
      finalStateDominoes.push(dominoes[i]);
    } else if (dominoes[i] == '.') {
      if (finalStateDominoes.last() == 'R') finalStateDominoes.push('R');
      else finalStateDominoes.push('.');
    } else {
      if (lastRightIndex == -1) {
        finalStateDominoes = new Array(i + 1).fill('L');
      } else if (lastLeftIndex > lastRightIndex) {
        for (let j = lastLeftIndex + 1; j <= i; j++) {
          finalStateDominoes[j] = 'L'
        }
      } else {
        let mid = lastRightIndex + Math.floor((i - lastRightIndex) / 2);
        if ((i - lastRightIndex) % 2 == 0) {
          finalStateDominoes[mid] = '.';
        }
        for (let j = mid + 1; j <= i; j++) {
          finalStateDominoes[j] = 'L';
        }
      }
      lastLeftIndex = i
    }
  }

  return finalStateDominoes.join('');
}
