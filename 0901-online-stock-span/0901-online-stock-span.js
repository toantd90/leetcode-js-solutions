var StockSpanner = function () {
  this.stocks = [];
  this.stack = [];
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  while (
    this.stack.length > 0 &&
    this.stocks[this.stack[this.stack.length - 1]] <= price
  ) {
    this.stack.pop();
  }

  this.stack.push(this.stocks.length);
  this.stocks.push(price);

  return this.stack.length === 1
    ? this.stocks.length
    : this.stack[this.stack.length - 1] - (this.stack[this.stack.length - 2] || 0);
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
