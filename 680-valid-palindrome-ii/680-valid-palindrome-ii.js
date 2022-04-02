/**
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = (s, l = 0, r = s.length - 1, needToRemoved = 0) => {
  if (needToRemoved > 1) {
    return false;
  }

  while (l <= r) {
    if (s[l] === s[r]) {
      l++;
      r--;
    } else {
      if (s[l] !== s[r - 1] && s[l + 1] !== s[r]) {
        return l === r - 1 && !needToRemoved;
      } else {
        return (
          (s[l + 1] === s[r] && validPalindrome(s, l + 2, r - 1, needToRemoved + 1)) ||
          (s[l] === s[r - 1] && validPalindrome(s, l + 1, r - 2, needToRemoved + 1))
        );
      }
    }
  }

  return needToRemoved <= 1;
};
