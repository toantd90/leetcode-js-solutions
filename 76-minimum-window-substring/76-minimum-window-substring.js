const getIndex = (c) => {
  const charCode = c.charCodeAt(0);

  if (charCode >= 97) return charCode - 97 + 26;

  return charCode - 65;
};

const isValidSubstring = (cntS, cntT) =>
  cntS.every((cnt, index) => cnt >= cntT[index]);
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (t.length > s.length) return '';

  let start = 0;
  let end = 0;

  let cntT = new Array(52).fill(0);

  for (let c of t) {
    cntT[getIndex(c)]++;
  }

  let minimumSubstring = s.length + 1;
  let ans = '';

  let cntS = new Array(52).fill(0);
  while (end < s.length && !isValidSubstring(cntS, cntT)) {
    cntS[getIndex(s[end])]++;

    if (isValidSubstring(cntS, cntT)) {
      while (isValidSubstring(cntS, cntT)) {
        cntS[getIndex(s[start])]--;

        start++;
      }

      if (end - start + 1 < minimumSubstring) {
        minimumSubstring = end - start + 1;
        ans = s.slice(start - 1, end + 1);
      }
    }

    end++;
  }

  return ans;
};
