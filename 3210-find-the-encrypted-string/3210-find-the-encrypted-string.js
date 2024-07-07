/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var getEncryptedString = function(s, k) {
  k %= s.length;
  return s.substring(k) + s.substring(0, k);
};