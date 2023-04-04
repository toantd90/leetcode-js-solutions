/**
 * @param {string} s
 * @return {number}
 */
function findTheLongestBalancedSubstring(s) {
  let zeroIndex = -1;
  let longest = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '0') {
      let zeroCount = 0;
      while (s[i] === '0' && i < s.length) {
        zeroCount++;
        i++;
      }

      let oneCount = 0;

      while (s[i] === '1' && i < s.length) {
        oneCount++;
        i++;
      }

      longest = Math.max(longest, Math.min(zeroCount, oneCount) * 2);
      i--;
    }
  }

  return longest;
}
