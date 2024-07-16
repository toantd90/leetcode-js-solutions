function canMakeBouquet(bloomDay, m, k, makeDay) {
  let consecutiveMakableDay = 0;
  let bouquet = 0;

  for (let day of bloomDay) {
    if (day <= makeDay) {
      consecutiveMakableDay++;
    } else {
      bouquet += Math.floor(consecutiveMakableDay / k);
      consecutiveMakableDay = 0;
    }
  }

  bouquet += Math.floor(consecutiveMakableDay / k);

  return bouquet >= m;
}

/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function (bloomDay, m, k) {
  if (m * k > bloomDay.length) return -1;
  let l = Number.MAX_SAFE_INTEGER;
  let r = 0;
  for (let day of bloomDay) {
    l = Math.min(l, day);
    r = Math.max(r, day);
  }

  while (l < r) {
    const mid = l + Math.floor((r - l) / 2);

    if (canMakeBouquet(bloomDay, m, k, mid)) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }

  return l;
};
