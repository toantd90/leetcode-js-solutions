/**
 * @param {number} rowIndex
 * @return {number[]}
 */
function getRow(rowIndex) {
  let rows = [[0, 1, 0]];
  for (let i = 1; i <= rowIndex; i++) {
    let currentRow = [0];
    for (let j = 0; j < rows[i - 1].length - 1; j++) {
      currentRow.push(rows[i - 1][j] + rows[i - 1][j + 1]);
    }

    currentRow.push(0);
    rows.push(currentRow);
  }

  return rows[rowIndex].slice(1, rowIndex + 2);
}
