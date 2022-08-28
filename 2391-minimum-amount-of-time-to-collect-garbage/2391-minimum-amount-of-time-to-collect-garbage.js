/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
function garbageCollection(garbage, travel) {
  let trucks = new Array(3).fill().map((_) => ({ time: 0, location: 0 }));
  let travelTime = [0];
  for (let i = 0; i < travel.length; i++) {
    travelTime[i + 1] = travel[i] + travelTime[i];
  }

  for (let i = 0; i < garbage.length; i++) {
    let curGarbage = [0, 0, 0];

    for (let gar of garbage[i]) {
      if (gar == 'M') {
        curGarbage[0]++;
      } else if (gar == 'P') {
        curGarbage[1]++;
      } else {
        curGarbage[2]++;
      }
    }

    for (let j = 0; j < 3; j++) {
      if (curGarbage[j] > 0) {
        trucks[j].time +=
          curGarbage[j] + travelTime[i] - travelTime[trucks[j].location];
        trucks[j].location = i;
      }
    }
  }

  let totalTime = 0;

  for (let { time, location } of trucks) {
    totalTime += time;
  }

  return totalTime;
}
