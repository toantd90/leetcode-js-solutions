/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = (s, p) => {
  const len = p.length;
  let charMap = new Map(),
    res = [];

  for (let c of p) {
    charMap.set(c, (charMap.get(c) || 0) + 1);
  }
  for (let i = 0; i < len; i++) {
    charMap.set(s[i], (charMap.get(s[i]) || 0) - 1);
    
    if (!charMap.get(s[i])) {
      charMap.delete(s[i]);
    }
  }
  if (!charMap.size) res.push(0);

  for (let i = 0; i < s.length - len; i++) {
    charMap.set(s[i], (charMap.get(s[i]) || 0) + 1);
    if (!charMap.get(s[i])) charMap.delete(s[i]);

    charMap.set(s[len + i], (charMap.get(s[len + i]) || 0) - 1);
    if (!charMap.get(s[len + i])) charMap.delete(s[len + i]);

    if (!charMap.size) res.push(i + 1);
  }

  return res;
};
