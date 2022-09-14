var HitCounter = function () {
  this.logs = [];
};

/**
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function (timestamp) {
  if (!this.logs.length) {
    this.logs.push([timestamp, 1]);
    return;
  }

  const lastLog = this.logs[this.logs.length - 1];

  if (lastLog[0] == timestamp) {
    this.logs[this.logs.length - 1] = [lastLog[0], lastLog[1] + 1];
  } else {
    this.logs.push([timestamp, lastLog[1] + 1]);
  }
};

HitCounter.prototype.searchFirstHit = function (timestamp) {
  let l = 0;
  let r = this.logs.length - 1;

  if (timestamp < 0) timestamp = 0;

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);

    if (this.logs[mid][0] <= timestamp) {
      l = mid + 1;
    } else {
      if (mid == l || this.logs[mid - 1][0] <= timestamp) {
        return mid;
      } else {
        r = mid - 1;
      }
    }
  }

  return l;
};

HitCounter.prototype.searchLastHit = function (timestamp) {
  let l = 0;
  let r = this.logs.length - 1;

  while (l < r) {
    let mid = l + Math.floor((r - l) / 2);

    if (this.logs[mid][0] > timestamp) {
      r = mid - 1;
    } else {
      if (mid == r && this.logs[mid + 1][0] > timestamp) return mid;
      else l = mid + 1;
    }
  }

  return r;
};

/**
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function (timestamp) {
  const firstHitIndex = this.searchFirstHit(timestamp - 300);
  const lastHitIndex = this.searchLastHit(timestamp);

  return (
    (this.logs[lastHitIndex] ? this.logs[lastHitIndex][1] : 0) -
    (this.logs[firstHitIndex - 1] ? this.logs[firstHitIndex - 1][1] : 0)
  );
};

/**
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */
