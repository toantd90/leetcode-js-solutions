/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  const pLen = p.length;
  const sLen = s.length;
  if (sLen === 0 || pLen > sLen) return [];
  
  let counts = {};
  let counter = 0;
  
  for (let char of p) {
    if (typeof counts[char] === 'undefined') {
      counts[char] = 1;
      counter++;
    } else {
      counts[char]++;
    }
  }
  
  let left = 0;
  let right = 0;
  let result = [];
  
  while (right < sLen) {
    if (typeof counts[s[right]] !== 'undefined') {
      counts[s[right]]--;
      if (counts[s[right]] === 0) counter--;
    }
    
    right++;
    
    while (counter === 0) {
      if (right - left === pLen) result.push(left);
      if (typeof counts[s[left]] !== 'undefined') {
        counts[s[left]] ++;
        if (counts[s[left]] > 0) counter++;
      }
      
      left++;
    }
  }
  
  return result;
};

// const findAnagrams = (s, p) => {
//   const len = p.length;
//   let charMap = new Map(),
//     res = [];

//   for (let c of p) {
//     charMap.set(c, (charMap.get(c) || 0) + 1);
//   }
//   for (let i = 0; i < len; i++) {
//     charMap.set(s[i], (charMap.get(s[i]) || 0) - 1);
    
//     if (!charMap.get(s[i])) {
//       charMap.delete(s[i]);
//     }
//   }
//   if (!charMap.size) res.push(0);

//   for (let i = 0; i < s.length - len; i++) {
//     charMap.set(s[i], (charMap.get(s[i]) || 0) + 1);
//     if (!charMap.get(s[i])) charMap.delete(s[i]);

//     charMap.set(s[len + i], (charMap.get(s[len + i]) || 0) - 1);
//     if (!charMap.get(s[len + i])) charMap.delete(s[len + i]);

//     if (!charMap.size) res.push(i + 1);
//   }

//   return res;
// };
