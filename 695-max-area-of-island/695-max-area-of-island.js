/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxAreaOfIsland = grid => {
    let maxArea = 0
    const m = grid.length
    const n = grid[0].length
    
    const isInGrid = (row, col) => row >= 0 && row < m && col >= 0 && col < n
    const dirs = [0, 1, 0, -1, 0]
    
    
    const dfs = (row, col) => {
        let area = 1
        let stack = [[row, col]]
        while (stack.length) {
            const [row, col] = stack.shift()

            for (let i = 0; i < 4; i++) {
                const nextRow = row + dirs[i]
                const nextCol = col + dirs[i + 1]
                if (isInGrid(nextRow, nextCol) && grid[nextRow][nextCol]) {
                    grid[nextRow][nextCol] = 0
                    area++
                    stack.push([nextRow, nextCol])
                }
            }
        }
        
        return area
    }
    
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (grid[row][col]) {
                grid[row][col] = 0
                maxArea = Math.max(maxArea, dfs(row, col))
            }
        }
    }
    
    return maxArea
};