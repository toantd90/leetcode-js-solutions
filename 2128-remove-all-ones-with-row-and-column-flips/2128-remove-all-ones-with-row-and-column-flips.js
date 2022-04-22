/**
 * @param {number[][]} grid
 * @return {boolean}
 */
const removeOnes = grid => {
    const m = grid.length
    const n = grid[0].length
    
    for (let i = 0; i < n; i++) {
        if (grid[0][i] === 1) {
            for (let j = 0; j < m; j++) {
                grid[j][i] = grid[j][i] === 0 ? 1 : 0
            }
        }
    }
    
    for (let i = 1; i < m; i++) {
        let oneCnt = 0
        for (let j = 0; j < n; j++) {
            if (grid[i][j]) {
               oneCnt++ 
            }
        }
        
        if (oneCnt !== 0 && oneCnt !== n) return false
    }
    
    return true
};