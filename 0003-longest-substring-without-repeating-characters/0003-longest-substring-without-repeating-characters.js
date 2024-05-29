/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let l = 0;
  let r = 0;
  let map = new Map();
  let longest = 0;

  while (r < s.length) {
    while (map.get(s[r]) && map.get(s[r]) > 0) {
      map.set(s[l], map.get(s[l]) - 1);
      l++;
    }
    map.set(s[r], (map.get(s[r]) || 0) + 1);
    longest = Math.max(longest, r - l + 1);
    r++;
  }

  return longest;
};
