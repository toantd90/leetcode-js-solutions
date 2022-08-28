/**
 * @param {string} s
 * @return {string}
 */
function removeStars(s) {
  let ans = '';
  let starCnt = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] == '*') {
      starCnt++;
    } else {
      while (starCnt > 0 && s[i] !== '*') {
        i--;
        starCnt--;
      }

      if (s[i] !== '*') {
        ans = (s[i] || '') + ans;
      } else {
        starCnt++;
      }
    }
  }

  return ans;
}
