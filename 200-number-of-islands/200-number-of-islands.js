/**
 * @param {character[][]} grid
 * @return {number}
 */
const directions = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];
const isInRange = (x, y, maxX, maxY) =>
  x >= 0 && x < maxX && y >= 0 && y < maxY;
const bfs = ([i, j], grid, m, n) => {
  let queue = [[i, j]];
  grid[i][j] = '0';
  while (queue.length) {
    const [x, y] = queue.shift();

    for (let [addX, addY] of directions) {
      const newX = x + addX;
      const newY = y + addY;
      if (isInRange(newX, newY, m, n) && grid[newX][newY] === '1') {
        queue.push([newX, newY]);
        grid[newX][newY] = '0';
      }
    }
  }
};
const numIslands = (grid) => {
  const m = grid.length;
  const n = grid[0].length;
  let islands = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        bfs([i, j], grid, m, n);
        islands++;
      }
    }
  }

  return islands;
};
