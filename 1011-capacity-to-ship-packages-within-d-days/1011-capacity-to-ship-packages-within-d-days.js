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
var shipWithinDays = function(weights, days) {
    let maxWeight = 500;
    let minWeight = Math.max(...weights);

    while (minWeight < maxWeight) {
        const midWeight = minWeight + Math.floor((maxWeight - minWeight) / 2);

        if (canLoad(weights, midWeight, days)) {
            maxWeight = midWeight;
        } else {
            minWeight = midWeight + 1;
        }
    }

    return minWeight;
};