/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
  const n = position.length;

  const positionAndTime = position
    .map((p, i) => ({ time: (target - p) / speed[i], position: p }))
    .sort((pt1, pt2) => pt1.position - pt2.position);

  let fleet = 1;
  let currentTime = positionAndTime[n - 1].time;

  for (let i = n - 2; i >= 0; i--) {
    const { time } = positionAndTime[i];
    if (time > currentTime) {
      fleet++;
      currentTime = time;
    }
  }

  return fleet;
};
