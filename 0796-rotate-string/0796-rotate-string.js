/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
function rotateString(s, goal) {
  return s.length == goal.length && (s + s).includes(goal);
}
