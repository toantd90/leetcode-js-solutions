/**
 * @param {number} n
 * @return {number[][]}
 */
const generateMatrix = n => {
    if (n === 1) return [[1]]
    let grid = new Array(n).fill().map(() => new Array(n).fill(-1))
    let startRow = 0, endRow = n - 1, startCol = 0, endCol = n - 1
    let val = 1
    
    while (startRow <= endRow && startCol <= endCol) {
        for (let i = startCol; i <= endCol; i++) {
            grid[startRow][i] = val
            val++
        }
        startRow++
        
        for (let i = startRow; i <= endRow; i++) {
            grid[i][endCol] = val
            val++
        }
        endCol--
        
        for (let i = endCol; i >= startCol; i--) {
            grid[endRow][i] = val
            val++
        }
        endRow--
        
        for (let i = endRow; i >= startRow; i--) {
            grid[i][startCol] = val
            val++
        }
        startCol++
    }
    
    return grid
};