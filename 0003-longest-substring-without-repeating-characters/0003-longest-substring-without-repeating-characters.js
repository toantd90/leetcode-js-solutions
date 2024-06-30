/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let l = 0;
    let r = 0;
    let longest = 0;
    let currentMap = {}

    while (r < s.length) {
        while (l < r && currentMap[s[r]]) {
            currentMap[s[l]]--;
            l++;
        }

        currentMap[s[r]] = (currentMap[s[r]] || 0) + 1;
        longest = Math.max(longest, r - l + 1);
        r++;
    }

    return longest;
};