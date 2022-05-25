/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    if (original.length !== m * n) return []
    let grid = []
    for (let i = 0; i < original.length; i += n) {
        grid.push(original.slice(i, i + n));
    }
    
    return grid
};