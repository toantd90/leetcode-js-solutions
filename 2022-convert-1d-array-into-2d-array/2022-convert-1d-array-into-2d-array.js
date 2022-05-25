/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    if (original.length !== m * n) return []
    let grid = new Array(m).fill().map(_ => new Array(n).fill(null))
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            grid[i][j] = original[i * n + j]
        }
    }
    
    return grid
};