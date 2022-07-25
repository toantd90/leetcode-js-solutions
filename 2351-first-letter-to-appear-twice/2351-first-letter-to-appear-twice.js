/**
 * @param {string} s
 * @return {character}
 */
const repeatedCharacter = s => {
  let cnt = {}
  
  for (let i = 0; i < s.length; i++) {
    if (cnt[s[i]]) return s[i]
    cnt[s[i]] = 1
  }
};