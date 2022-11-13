/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  return s.trim().split(' ').reverse().filter(word => !!word).join(' ')
};