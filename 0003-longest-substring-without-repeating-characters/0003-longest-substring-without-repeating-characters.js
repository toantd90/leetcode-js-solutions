/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
    let count = {};
    let l = 0;
    let r = 0;
    let longest = 0;

    while (r < s.length) {
        count[s[r]] = (count[s[r]] || 0) + 1;

        if (count[s[r]] > 1) {
            while (count[s[r]] > 1) {
                count[s[l]]--;
                l++;
            }
        }

        longest = Math.max(longest, r - l + 1);
        r++;
    }

    return longest;
};