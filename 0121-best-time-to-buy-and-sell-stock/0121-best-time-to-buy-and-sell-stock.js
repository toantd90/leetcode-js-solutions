/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
    let min = prices[0];
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > min) {
            profit = Math.max(profit, prices[i] - min);
        } else {
            min = prices[i];
        }
    }

    return profit;
};