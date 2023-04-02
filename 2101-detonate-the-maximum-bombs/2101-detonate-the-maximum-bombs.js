function calculateDistance(xi, yi, xj, yj) {
  return Math.sqrt(Math.pow(xi - xj, 2) + Math.pow(yi - yj, 2));
}

function dfs(bombs, bombIndex, visited) {
  let count = 1;
  visited[bombIndex] = true;
  const [x, y, r] = bombs[bombIndex];

  for (let i = 0; i < bombs.length; i++) {
    const [xi, yi, ri] = bombs[i];
    if (!visited[i] && calculateDistance(x, y, xi, yi) <= r) {
      count += dfs(bombs, i, visited);
    }
  }

  return count;
}

/**
 * @param {number[][]} bombs
 * @return {number}
 */
function maximumDetonation(bombs) {
  const numOfBombs = bombs.length;
  let maxDetonated = 0;

  for (let i = 0; i < numOfBombs; i++) {
    maxDetonated = Math.max(
      maxDetonated,
      dfs(bombs, i, new Array(numOfBombs).fill(false))
    );
  }

  return maxDetonated;
}
