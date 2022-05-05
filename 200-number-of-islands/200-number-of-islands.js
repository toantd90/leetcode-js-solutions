const isInGrid = (row, col, rows, cols) => row >= 0 && row < rows && col >= 0 && col < cols

const bfs = (grid, [row, col]) => {
    const rows = grid.length
    const cols = grid[0].length
    const dirs = [0, 1, 0, -1, 0]
    
    let queue = [[row, col]]
    grid[row][col] = -1
    
    while (queue.length) {
        const size = queue.length;
        
        for (let i = 0; i < size; i++) {
            const [row, col] = queue.shift()
        
            for (let j = 0; j < 4; j++) {
               const nextRow = row + dirs[j]
               const nextCol = col + dirs[j + 1]

               if (isInGrid(nextRow, nextCol, rows, cols) && grid[nextRow][nextCol] === '1') {
                   grid[nextRow][nextCol] = '-1'
                   queue.push([nextRow, nextCol])
               }
            }
        }
    }
}

/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = grid => {
    const rows = grid.length
    const cols = grid[0].length
    
    let islands = 0
    
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] === '0' || grid[row][col] === '-1') {
                continue
            }
            
            bfs(grid, [row, col])
            islands++
        }
    }
    
    return islands
};