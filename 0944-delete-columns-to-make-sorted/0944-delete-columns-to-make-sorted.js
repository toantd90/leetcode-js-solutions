/**
 * @param {string[]} strs
 * @return {number}
 */
function minDeletionSize(strs) {
  const rows = strs.length;
  const cols = strs[0].length;

  let deletedCol = 0;
  for (let col = 0; col < cols; col++) {
    for (let row = 1; row < rows; row++) {
      if (strs[row].charCodeAt(col) < strs[row - 1].charCodeAt(col)) {
        deletedCol++;
        break;
      }
    }
  }

  return deletedCol;
}
