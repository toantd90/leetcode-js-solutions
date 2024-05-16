/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.data = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  const min = this.getMin();
  this.data.push({
    value: x,
    min: typeof x !== 'number' 
      ? min
      : typeof min === 'number'
        ? x < min
          ? x
          : min
        : x
  });
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.data.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.getLast().value;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.getLast() ? this.getLast().min : null;
};

MinStack.prototype.getLast = function() {
  return this.data[this.data.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
    