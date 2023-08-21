/**
 * @param {string} s
 * @return {boolean}
 */
function repeatedSubstringPattern(s) {
  if (s.length < 2) return false;
  for (let i = 0; i < s.length / 2; i++) {
    if (s.length % (i + 1) === 0) {
      const repeatedTimes = s.length / (i + 1);

      if (s.substring(0, i + 1).repeat(repeatedTimes) === s) {
        return true;
      }
    }
  }

  return false;
}
