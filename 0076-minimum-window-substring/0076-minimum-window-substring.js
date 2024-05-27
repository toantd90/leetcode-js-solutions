function compareCount(count, curCount) {
  return count.every((c, i) => c <= curCount[i]);
}

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function minWindow(s, t) {
  const m = s.length;
  const n = t.length;

  if (t > m) return "";

  let count = new Array(52).fill(0);

  for (let i = 0; i < n; i++) {
    const charCode = t.charCodeAt(i);
    if (charCode > 96) count[charCode - 97 + 26]++;
    else count[charCode - 65]++;
  }

  let l = 0;
  let r = 0;
  let curCount = new Array(52).fill(0);
  let result = "";

  while (r < m) {
    while (r < m && !compareCount(count, curCount)) {
      const curCharCode = s.charCodeAt(r);
      if (curCharCode > 96) curCount[curCharCode - 97 + 26]++;
      else curCount[curCharCode - 65]++;
      r++;
    }

    while (compareCount(count, curCount)) {
      let curResult = s.slice(l, r);

      if (result === "") {
        result = curResult;
      } else {
        if (result.length > curResult.length) {
          result = curResult;
        }
      }

      const curCharCode = s.charCodeAt(l);
      if (curCharCode > 96) curCount[curCharCode - 97 + 26]--;
      else curCount[curCharCode - 65]--;
      l++;
    }
  }

  return result;
}
