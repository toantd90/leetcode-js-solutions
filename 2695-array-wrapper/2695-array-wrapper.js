/**
 * @param {number[]} nums
 */
var ArrayWrapper = function (nums) {
  this.nums = nums;
  let value = 0;
  for (let num of this.nums) {
    value += num;
  }

  this.value = value;
  this.str = "[" + this.nums.toString() + "]";
};

ArrayWrapper.prototype.valueOf = function () {
  return this.value;
};

ArrayWrapper.prototype.toString = function () {
  return this.str;
};

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */
