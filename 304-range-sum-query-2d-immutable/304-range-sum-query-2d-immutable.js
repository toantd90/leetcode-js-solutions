/**
 * @param {number[][]} matrix
 */

class NumMatrix {
  constructor(matrix) {
    
    const m = matrix.length
    if (m === 0)
      return
    const n = matrix[0].length

    let rangeSum = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        rangeSum[i + 1][j + 1] = rangeSum[i][j + 1] + rangeSum[i + 1][j] - rangeSum[i][j] + matrix[i][j]
      }
    }

    this.rangeSum = rangeSum
  }
  
  sumRegion(r1, c1, r2, c2) {
    return this.rangeSum[r2 + 1][c2 + 1] - this.rangeSum[r2 + 1][c1] - this.rangeSum[r1][c2 + 1] + this.rangeSum[r1][c1]
  }
}