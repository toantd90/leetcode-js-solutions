/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
function repeatedStringMatch(a, b) {
  const maxStr = a.repeat(Math.ceil((a.length + b.length) / a.length));
  const indexOfB = maxStr.indexOf(b);

  if (indexOfB === -1) return -1;

  return Math.ceil((indexOfB + b.length) / a.length);
}
