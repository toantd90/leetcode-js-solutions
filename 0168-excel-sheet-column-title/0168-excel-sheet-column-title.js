/**
 * @param {number} columnNumber
 * @return {string}
 */
function convertToTitle(columnNumber) {
  let title = "";
  while (columnNumber > 0) {
    columnNumber--;
    title = String.fromCharCode(65 + (columnNumber % 26)) + title;
    columnNumber = Math.floor(columnNumber / 26);
  }

  return title;
}
