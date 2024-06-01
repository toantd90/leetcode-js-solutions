/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
  const n = position.length;
  let positionAndTime = [];
  for (let i = 0; i < n; i++) {
    positionAndTime.push([position[i], (target - position[i]) / speed[i]]);
  }

  positionAndTime.sort((pt1, pt2) => pt1[0] - pt2[0]);

  let currentTime = positionAndTime[n - 1][1];
  let fleet = 1;

  for (let i = n - 2; i >= 0; i--) {
    if (positionAndTime[i][1] > currentTime) {
      currentTime = positionAndTime[i][1];
      fleet++;
    }
  }

  return fleet;
};
