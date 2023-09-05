/**
 * @param {string} s
 * @return {number[]}
 */
function diStringMatch(s) {
  let low = 0;
  let high = s.length;
  let perm = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "D") {
      perm.push(high--);
    } else {
      perm.push(low++);
    }
  }

  perm.push(low);
  return perm;
}
