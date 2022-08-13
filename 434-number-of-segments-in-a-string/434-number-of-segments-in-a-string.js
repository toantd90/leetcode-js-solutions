/**
 * @param {string} s
 * @return {number}
 */
function countSegments (s) {
  return s.split(' ').reduce(function cb(acc, cur) {
    if (cur) {
      acc++
    }
    return acc
  }, 0)
};