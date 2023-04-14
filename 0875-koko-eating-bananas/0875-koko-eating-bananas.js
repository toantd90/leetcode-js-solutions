function canEat(piles, maxHours, eatingCapacity) {
  let hours = 0;
  for (let i = 0; i < piles.length; i++) {
    hours += Math.ceil(piles[i] / eatingCapacity);

    if (hours > maxHours) {
      return false;
    }
  }

  return true;
}

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
function minEatingSpeed(piles, h) {
  let max = 1;

  for (let banana of piles) {
    max = Math.max(max, banana);
  }

  if (h === piles.length) {
    return max;
  }

  let min = 1;

  while (min <= max) {
    let mid = min + Math.floor((max - min) / 2);

    if (canEat(piles, h, mid)) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }

  return min;
}
