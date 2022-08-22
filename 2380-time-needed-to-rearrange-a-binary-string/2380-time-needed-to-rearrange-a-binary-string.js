/**
 * @param {string} s
 * @return {number}
 */
function secondsToRemoveOccurrences(s) {
  let cloneS = s
  let seconds = 0
  
  while (cloneS.indexOf('01') >= 0) {
    cloneS = cloneS.replaceAll('01', '10')
    seconds++
  }
  
  return seconds
};
