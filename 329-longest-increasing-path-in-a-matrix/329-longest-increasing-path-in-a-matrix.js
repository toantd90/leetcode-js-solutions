/**
 * @param {number[][]} matrix
 * @return {number}
 */
const longestIncreasingPath = matrix => {
    const rows = matrix.length
    const cols = matrix[0].length
    
    let adjacencyList = new Array(rows * cols).fill().map(_ => new Array())
    
    const dirs = [0, 1, 0, -1, 0]
    const isInMatrix = (row, col) => row >= 0 && row < rows && col >= 0 && col < cols
    
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            for (let i = 0; i < 4; i++) {
                const nextRow = row + dirs[i]
                const nextCol = col + dirs[i + 1]
                
                if (isInMatrix(nextRow, nextCol) && matrix[nextRow][nextCol] > matrix[row][col]) {
                    adjacencyList[row * cols + col].push(nextRow * cols + nextCol)
                }
            }
        }
    }
    
    let longestPath = 1
    let cache = new Array(rows).fill().map(_ => new Array(cols).fill(0))
    
    const dfs = (row, col) => {
        if (cache[row][col] !== 0) return cache[row][col]
        let maxPathLength = 0

        for (let i = 0; i < 4; i++) {
            const nextRow = row + dirs[i]
            const nextCol = col + dirs[i + 1]
            
            if (isInMatrix(nextRow, nextCol) && matrix[nextRow][nextCol] > matrix[row][col]) {
                cache[row][col] = Math.max(cache[row][col], dfs(nextRow, nextCol))
            }
            
        }
        
        return ++cache[row][col]
    }
    
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            longestPath = Math.max(longestPath, dfs(row, col))
        }
    }
    
    return longestPath
};