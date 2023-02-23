/**
 * @param {string[]} operations
 * @return {number}
 */
function finalValueAfterOperations(operations) {
  let num = 0;
  for (let operation of operations) {
    if (operation[1] === '+') {
      num++;
    } else {
      num--;
    }
  }

  return num;
}
