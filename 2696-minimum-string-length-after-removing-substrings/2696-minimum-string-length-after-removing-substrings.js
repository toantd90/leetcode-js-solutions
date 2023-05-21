/**
 * @param {string} s
 * @return {number}
 */
function minLength(s) {
  if (s.length === 1) return s.length;

  while (s.indexOf("AB") >= 0 || s.indexOf("CD") >= 0) {
    const indexOfAB = s.indexOf("AB");
    if (indexOfAB >= 0) {
      s = s.slice(0, indexOfAB) + s.slice(indexOfAB + 2);
    }

    const indexOfCD = s.indexOf("CD");
    if (indexOfCD >= 0) {
      s = s.slice(0, indexOfCD) + s.slice(indexOfCD + 2);
    }
  }

  return s.length;
}
