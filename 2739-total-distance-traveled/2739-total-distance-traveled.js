/**
 * @param {number} mainTank
 * @param {number} additionalTank
 * @return {number}
 */
function distanceTraveled(mainTank, additionalTank) {
  let distance = 0;
  while (mainTank > 0) {
    distance += Math.min(mainTank, 5) * 10;
    mainTank -= 5;
    if (mainTank >= 0 && additionalTank > 0) {
      mainTank += 1;
      additionalTank -= 1;
    }
  }

  return distance;
}
