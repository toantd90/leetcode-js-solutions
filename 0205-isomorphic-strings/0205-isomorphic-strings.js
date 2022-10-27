/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isIsomorphic(s, t) {
  let mapS = {};
  let mapT = {};
  for (let i = 0; i < s.length; i++) {
    if (
      (mapS[s[i]] && mapS[s[i]] != t[i]) ||
      (mapT[t[i]] && mapT[t[i]] !== s[i])
    ) {
      return false;
    }

    mapS[s[i]] = t[i];
    mapT[t[i]] = s[i];
  }

  return true;
}
