/**
 * @param {number} num
 * @return {number}
 */
function minMaxDifference(num) {
  const numStr = num.toString();
  let max = numStr;

  for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] !== '9' && numStr === max) {
      max = Number(max.replaceAll(numStr[i], 9));
      break;
    }
  }

  return max - Number(numStr.replaceAll(numStr[0], '0'));
}
