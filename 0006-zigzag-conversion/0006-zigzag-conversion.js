/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = (s, numRows) => {
  if (numRows === 1 || s.length < numRows) return s;

  let rows = '';

  for (let i = 0; i < numRows; i++) {
    let lastIndex = i;
    let row = s[i];
    if (i === 0 || i === numRows - 1) {
      while (lastIndex + (numRows - 1) * 2 < s.length) {
        lastIndex += (numRows - 1) * 2;
        row += s[lastIndex];
      }
    } else {
      let runTime = 0;
      
      while (
        (runTime % 2 === 0 && lastIndex + (numRows - i - 1) * 2 < s.length) ||
        (runTime % 2 === 1 && lastIndex + i * 2 < s.length)
      ) {
        if (runTime % 2 === 0) {
          lastIndex += (numRows - i - 1) * 2;
          row += s[lastIndex];
        } else {
          lastIndex += i * 2;
          row += s[lastIndex];
        }
        runTime++;
      }
    }

    rows += row;
  }

  return rows;
};
