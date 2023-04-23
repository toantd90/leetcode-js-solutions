/**
 * @param {number} arrivalTime
 * @param {number} delayedTime
 * @return {number}
 */
function findDelayedArrivalTime(arrivalTime, delayedTime) {
  return arrivalTime + delayedTime >= 24
    ? arrivalTime + delayedTime - 24
    : arrivalTime + delayedTime;
}
