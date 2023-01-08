/**
 * @param {number} value
 * @param {number} k
 */
var DataStream = function (value, k) {
  this.value = value;
  this.k = k;
  this.lastStream = null;
};

/**
 * @param {number} num
 * @return {boolean}
 */
DataStream.prototype.consec = function (num) {
  let currentCount = 1;
  if (!this.lastStream || this.lastStream[0] !== num) {
    this.lastStream = [num, 1];
  } else {
    currentCount = this.lastStream[1] + 1;
    this.lastStream = [num, currentCount];
  }

  return num == this.value && currentCount >= this.k;
};

/**
 * Your DataStream object will be instantiated and called as such:
 * var obj = new DataStream(value, k)
 * var param_1 = obj.consec(num)
 */
