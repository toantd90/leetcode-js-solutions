/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  if (s.length == 0) return 0;
  let longestLength = 1;
  let l = 0;
  let r = 1;
  let subString = new Set();
  subString.add(s[0]);

  while (r < s.length) {
    while (subString.has(s[r])) {
      subString.delete(s[l]);
      l++;
    }
    subString.add(s[r]);
    longestLength = Math.max(longestLength, r - l + 1);
    r++;
  }

  return longestLength;
}
