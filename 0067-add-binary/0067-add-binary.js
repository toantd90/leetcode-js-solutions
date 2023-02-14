/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function addBinary(a, b) {
  const aBin = `0b${a}`;
  const bBin = `0b${b}`;
  const sum = BigInt(aBin) + BigInt(bBin);
  return sum.toString(2);
}
