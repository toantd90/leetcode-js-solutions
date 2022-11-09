var StockSpanner = function () {
  this.stocks = [];
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  let span = 1;
  while (
    this.stocks.length &&
    this.stocks[this.stocks.length - 1][0] <= price
  ) {
    span += this.stocks[this.stocks.length - 1][1];
    this.stocks.pop();
  }

  this.stocks.push([price, span]);

  return span;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
