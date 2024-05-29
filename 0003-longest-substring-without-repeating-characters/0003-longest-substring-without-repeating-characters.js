/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
    let l = 0;
    let r = 0;
    let count = {};
    let longest = 0;

    while (r < s.length) {
        while (count[s[r]] > 0) {
            count[s[l]]--;
            l++;
        }
        longest = Math.max(longest, r - l + 1);
        count[s[r]] = (count[s[r]] || 0) + 1;

        r++;
    }

    return longest;
};

// keep open the window until there is a a duplicated character 