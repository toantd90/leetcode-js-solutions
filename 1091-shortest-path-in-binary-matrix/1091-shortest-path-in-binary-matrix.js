/**
 * @param {number[][]} grid
 * @return {number}
 */
const shortestPathBinaryMatrix = (grid) => {
  const n = grid.length;

  if (grid[0][0] || grid[n - 1][n - 1]) return -1;
  if (n === 1) return n;
  
  let visited = new Array(n).fill().map((_) => new Array(n).fill(false));

  let queue = [[0, 0]];
  visited[0][0] = true;

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
    [-1, -1],
    [1, 1],
    [-1, 1],
    [1, -1],
  ];

  const isInRange = (x, y) => x >= 0 && x < n && y >= 0 && y < n;

  let path = 1;

  while (queue.length) {
    const size = queue.length;
    path++;

    for (let i = 0; i < size; i++) {
      const [x, y] = queue.shift();

      for (const [addX, addY] of directions) {
        const newX = x + addX;
        const newY = y + addY;

        if (
          isInRange(newX, newY) &&
          !visited[newX][newY] &&
          grid[newX][newY] === 0
        ) {
          if (newX === n - 1 && newY === n - 1) {
            return path;
          }
          visited[newX][newY] = true;
          queue.push([newX, newY]);
        }
      }
    }
  }

  return -1;
};
