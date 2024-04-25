/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    let rows = new Array(m).fill(false);
    let cols = new Array(m).fill(false);
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (!matrix[i][j]) {
                rows[i] = true;
                cols[j] = true;
            }
        }
    }


    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (rows[i] || cols[j]) {
                matrix[i][j] = 0;
            }
        }
    }
};