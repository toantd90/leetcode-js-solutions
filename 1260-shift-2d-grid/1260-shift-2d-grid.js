/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
const shiftGrid = (grid, k) => {
    const m = grid.length
    const n = grid[0].length
    k %= m * n
    let clonedGrid = [...grid]
    
    for (let i = 0; i < k; i++) {
        let lastCol = []
        for (let j = 0; j < m; j++) {
            lastCol[j] = clonedGrid[j][n - 1]
        }
        
        if (n > 1)
            for (let j = 0; j < m; j++) {
                for (let k = n - 1; k > 0; k--) {
                    clonedGrid[j][k] = clonedGrid[j][k - 1]
                }
            }
        
        for (let j = 1; j < m; j++) {
            clonedGrid[j][0] = lastCol[j - 1]
        }
        
        
        clonedGrid[0][0] = lastCol[m - 1]
    }
    
    return clonedGrid
};