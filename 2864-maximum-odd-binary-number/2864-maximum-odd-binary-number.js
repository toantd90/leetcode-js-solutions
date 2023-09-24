/**
 * @param {string} s
 * @return {string}
 */
function maximumOddBinaryNumber(s) {
  let onesCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "1") {
      onesCount++;
    }
  }

  return "1".repeat(onesCount - 1) + "0".repeat(s.length - onesCount) + "1";
}
