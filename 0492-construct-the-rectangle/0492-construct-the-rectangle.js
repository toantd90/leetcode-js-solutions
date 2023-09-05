/**
 * @param {number} area
 * @return {number[]}
 */
function constructRectangle(area) {
  for (let i = Math.floor(Math.sqrt(area)); i >= 1; i--) {
    if (area % i == 0) {
      const remain = area / i;
      return i > remain ? [i, remain] : [remain, i];
    }
  }

  return [area, 1];
}
