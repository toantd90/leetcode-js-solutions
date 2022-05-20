/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
const uniquePathsWithObstacles = obstacleGrid => {
    const m = obstacleGrid.length
    const n = obstacleGrid[0].length
    
    if (obstacleGrid[0][0] || obstacleGrid[m - 1][n - 1]) return 0
    
    let numWays = new Array(m + 1).fill().map(_ => new Array(n + 1).fill(0))
    numWays[1][1] = 1
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (obstacleGrid[i - 1][j - 1] || numWays[i][j]) continue
            
            numWays[i][j] = numWays[i - 1][j] + numWays[i][j -1]
        }
    }
    
    return numWays[m][n]
};