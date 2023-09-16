/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
function truncateSentence(s, k) {
  const words = s.split(" ");

  return words.splice(0, k).join(" ");
}
