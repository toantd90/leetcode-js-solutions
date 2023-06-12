var RecentCounter = function () {
  this.stream = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.stream.push(t);

  let i = 0;
  while (this.stream[i] < t - 3000) {
    i++;
  }

  this.stream = this.stream.splice(i);

  return this.stream.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
