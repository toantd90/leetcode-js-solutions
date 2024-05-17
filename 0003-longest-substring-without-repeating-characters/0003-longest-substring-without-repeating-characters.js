/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function(s) {
//   let left = 0;
//   let counts = {};
//   let longest = 0;
  
//   for (let right = 0; right < s.length;) {
//     counts[s[right]] = (counts[s[right]] || 0) + 1;
    
//     if (Object.values(counts).some(el => el > 1)) {
//       counts[s[left]]--;
//       left++;
//     }
    
//     longest = Math.max(longest, right - left + 1);
//     right++;
//   }
  
//   return longest;
// };

var lengthOfLongestSubstring = function(s) {
  let left = 0;
  let right = 0;
  let chars = new Array(128).fill(false);
  let longest = 0;
  
  while (right < s.length) {
    if (!chars[s.charCodeAt(right)]) {
      longest = Math.max(longest, right - left + 1);
      chars[s.charCodeAt(right)] = true;
    } else {
      if (s[left] !== s[right])
        chars[s.charCodeAt(left)] = false;
      left++;
    }
    right++;
  }
  
  return longest;
}