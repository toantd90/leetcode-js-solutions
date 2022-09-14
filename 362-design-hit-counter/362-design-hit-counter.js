var HitCounter = function () {
  this.calls = [];
  this.calledAt = new Map();
};

/**
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function (timestamp) {
  if (
    this.calls.length === 0 ||
    this.calls[this.calls.length - 1] != timestamp
  ) {
    this.calls.push(timestamp);
  }
  this.calledAt.set(timestamp, (this.calledAt.get(timestamp) || 0) + 1);
};

/**
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function (timestamp) {
  let hitCount = 0;
  let index = this._getUpperBound(timestamp);

  while (this.calls[index] > timestamp - 300) {
    hitCount += this.calledAt.get(this.calls[index]);
    index--;
  }
  return hitCount;
};

HitCounter.prototype._getUpperBound = function (timestamp) {
  // let i = 0;
  // for (; i < this.calls.length; i ++) {
  //     if (this.calls[i] > timestamp) {
  //         break;
  //     }
  // }
  // return i - 1;
  let left = 0;
  let right = this.calls.length - 1;

  while (left < right) {
    let mid = (left + right) >> 1;
    if (this.calls[mid] > timestamp) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

/**
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */
