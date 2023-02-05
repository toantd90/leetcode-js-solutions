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
