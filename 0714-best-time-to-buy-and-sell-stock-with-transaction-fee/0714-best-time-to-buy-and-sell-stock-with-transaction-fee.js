/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
function maxProfit(prices, fee) {
  let cash = 0;
  let hold = -prices[0];

  for (let i = 1; i < prices.length; i++) {
    cash = Math.max(cash, hold + prices[i] - fee);
    hold = Math.max(hold, cash - prices[i]);
  }

  return cash;
}
