/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let biggestIslandArea = 0;
    const n = grid.length
    const m = grid[0].length
    const LAND = 1;
    
    let depth = 0
    const dfs = (i, j) => {
      if (i < 0 || i >= n) return false
      if (j < 0 || j >= m) return false
      if (grid[i][j] != LAND) return false
  
      grid[i][j] = 0
      if(dfs(i+1, j, depth)) depth++
      if(dfs(i-1, j, depth)) depth++
      if(dfs(i, j+1, depth)) depth++
      if(dfs(i, j-1, depth)) depth++
      if (depth > biggestIslandArea)
        biggestIslandArea = depth
      return true
    }

    
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (grid[i][j] == LAND) {
          depth = 1
          dfs(i, j)
        }
      }
    }
    return biggestIslandArea;
};