/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
const uniquePathsWithObstacles = obstacleGrid => {
    const m = obstacleGrid.length
    const n = obstacleGrid[0].length
    
    if (obstacleGrid[0][0] || obstacleGrid[m - 1][n - 1]) return 0
    obstacleGrid[0][0] = 1
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 && j === 0) continue
            if (obstacleGrid[i][j]) {
                obstacleGrid[i][j] = 0
                continue                        
            }
            if (i === 0) {
                obstacleGrid[i][j] = obstacleGrid[i][j - 1]
            } else if (j === 0) {
                obstacleGrid[i][j] = obstacleGrid[i - 1][j]
            } else {
                obstacleGrid[i][j] = obstacleGrid[i][j - 1] + obstacleGrid[i - 1][j]
            }
        }
    }
    
    return obstacleGrid[m - 1][n - 1]
};