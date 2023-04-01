function calculateDistance(xi, yi, xj, yj) {
  return Math.sqrt(Math.pow(xi - xj, 2) + Math.pow(yi - yj, 2));
}

/**
 * @param {number[][]} bombs
 * @return {number}
 */
function maximumDetonation(bombs) {
  const numOfBombs = bombs.length;
  let distances = new Array(numOfBombs)
    .fill()
    .map((_) => new Array(numOfBombs).fill(-1));
  let detonatedBombs = new Array(numOfBombs)
    .fill()
    .map((_) => new Array(numOfBombs));

  for (let i = 0; i < numOfBombs; i++) {
    const [xi, yi, ri] = bombs[i];
    let detonatedBombsByI = [i];

    for (let j = 0; j < numOfBombs; j++) {
      if (i === j) {
        continue;
      }

      const [xj, yj, rj] = bombs[j];

      if (distances[i][j] === -1) {
        distances[i][j] = calculateDistance(xi, yi, xj, yj);
      }

      if (distances[i][j] <= ri) {
        detonatedBombsByI.push(j);
      }
    }

    detonatedBombs[i] = detonatedBombsByI;
  }

  let maxDetonated = 0;

  for (let i = 0; i < numOfBombs; i++) {
    let visited = new Array(numOfBombs).fill(false);
    visited[i] = true;

    let bombCount = 1;

    let queue = [i];

    while (queue.length > 0) {
      const bombIndex = queue.pop();

      for (let j = 0; j < detonatedBombs[bombIndex].length; j++) {
        if (!visited[detonatedBombs[bombIndex][j]]) {
          visited[detonatedBombs[bombIndex][j]] = true;
          bombCount++;
          queue.push(detonatedBombs[bombIndex][j]);
        }
      }
    }

    maxDetonated = Math.max(maxDetonated, bombCount);
  }

  return maxDetonated;
}
