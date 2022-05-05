/**
 * @param {character[][]} grid
 * @return {number}
 */

const dfs = (grid, i, j) => {
    if (i < 0 || i > grid.length - 1 || j < 0 || j > grid[0].length - 1 || grid[i][j] === '0') {
      return 0;
    }
    
    grid[i][j] = '0';
    dfs(grid, i-1, j);
    dfs(grid, i+1, j);
    dfs(grid, i, j-1);
    dfs(grid, i, j+1);
    return 1;
}

const numIslands = function(grid) {
  if (!grid || grid.length === 0) return 0;
  
  let numIslands = 0;
  
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        numIslands += dfs(grid, i, j);
      }
    }
  }
  
  return numIslands;
};