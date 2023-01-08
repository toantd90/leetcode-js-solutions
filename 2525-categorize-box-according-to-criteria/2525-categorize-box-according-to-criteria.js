/**
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @param {number} mass
 * @return {string}
 */
function categorizeBox(length, width, height, mass) {
  let isHeavy = false;
  let isBulky = false;
  if (mass >= 100) {
    isHeavy = true;
  }

  if (
    length >= 1e4 ||
    width >= 1e4 ||
    height >= 1e4 ||
    length * width * height >= 1e9
  ) {
    isBulky = true;
  }

  if (isBulky && isHeavy) {
    return 'Both';
  } else if (!isBulky && !isHeavy) {
    return 'Neither';
  } else if (isBulky) {
    return 'Bulky';
  } else {
    return 'Heavy';
  }
}
