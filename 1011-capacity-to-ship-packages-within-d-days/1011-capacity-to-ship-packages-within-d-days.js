function canLoad(weights, maxLoad, days) {
  let daysNeeded = 1;
  let currentLoad = 0;

  for (let weight of weights) {
    currentLoad += weight;

    if (currentLoad > maxLoad) {
      daysNeeded++;
      currentLoad = weight;
    }

    if (daysNeeded > days) {
      break;
    }
  }

  return daysNeeded <= days;
}

/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
function shipWithinDays(weights, days) {
  let totalLoad = 0;
  let maxLoad = 0;

  for (let weight of weights) {
    totalLoad += weight;
    maxLoad = Math.max(maxLoad, weight);
  }

  maxLoad = Math.max(maxLoad, Math.ceil(totalLoad / days));

  let l = maxLoad,
    r = totalLoad;

  while (l < r) {
    const mid = l + Math.floor((r - l) / 2);

    if (canLoad(weights, mid, days)) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }

  return l;
}
