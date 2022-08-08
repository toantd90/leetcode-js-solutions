/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function areAlmostEqual(s1, s2) {
  let d1 = '', d2 = ''
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] == s2[i]) continue
    d1 += s1[i]
    d2 += s2[i]
    if (d1.length == 3) return false
  }

  if (d1.length == 0) {
    return true
  } else if (d1.length == 1) {
    return false
  } else {
    return d1[0] == d2[1] && d1[1] == d2[0]
  }
};