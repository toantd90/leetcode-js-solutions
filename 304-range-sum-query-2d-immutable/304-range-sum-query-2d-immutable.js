/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    const m = matrix.length
    const n = matrix[0].length
    
    for (let i = 0; i < m; i++) {
        for (let j = 1; j < n; j++) {
            matrix[i][j] += matrix[i][j - 1]
        }
    }
    this.matrix = matrix
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    let sum = 0
    for (let i = row1; i <= row2; i++) {
        sum += this.matrix[i][col2] - (this.matrix[i][col1 - 1] || 0)
    }
    
    return sum
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */