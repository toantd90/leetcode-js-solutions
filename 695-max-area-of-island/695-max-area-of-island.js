/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxAreaOfIsland = grid => {
    let maxArea = 0
    const m = grid.length
    const n = grid[0].length
    
    const isInGrid = (row, col) => row >= 0 && row < m && col >= 0 && col < n
    
    const dfs = (row, col) => {
        if (!isInGrid(row, col) || !grid[row][col]) return 0
        grid[row][col] = 0
        
        return 1 + dfs(row + 1, col) + dfs(row - 1, col) + dfs(row, col + 1) + dfs(row, col - 1)
    }
    
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (grid[row][col]) {
                maxArea = Math.max(maxArea, dfs(row, col))
            }
        }
    }
    
    return maxArea
};