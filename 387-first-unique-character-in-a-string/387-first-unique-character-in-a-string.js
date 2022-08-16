/**
 * @param {string} s
 * @return {number}
 */
function firstUniqChar(s) {
  let cnt = new Array(26).fill(0)
  
  for (let i = 0; i < s.length; i++) {
    cnt[s.charCodeAt(i) - 97]++
  }
  
  for (let i = 0; i < s.length; i++) {
    if (cnt[s.charCodeAt(i) - 97] == 1) return i
  }
  
  return -1
};