/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
    let l = 0;
    let r = 0;
    let set = new Set();
    let longest = 0;

    while (r < s.length) {
        while (l <= r && set.has(s[r])) {
            set.delete(s[l]);
            l++;
        }
        set.add(s[r]);
        longest = Math.max(longest, r - l + 1);
        r++;
    }

    return longest;
};