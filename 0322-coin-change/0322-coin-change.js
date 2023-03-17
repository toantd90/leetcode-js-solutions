function calculateCoin(coins, remain, memo) {
  if (remain === 0) {
    return 0;
  }
  
  if (remain < 0) {
    return -1
  }
  
  if (memo[remain] !== 0) {
    return memo[remain];
  }

  let currentNumOfCoin = Number.MAX_SAFE_INTEGER;
  for (let coin of coins) {
    let res = calculateCoin(coins, remain - coin, memo)
    if (res >= 0 && res < currentNumOfCoin)
      currentNumOfCoin = 1 + res
  }

  memo[remain] = currentNumOfCoin === Number.MAX_SAFE_INTEGER ? -1 : currentNumOfCoin;

  return memo[remain];
}

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
function coinChange(coins, amount) {
  coins.sort((coin1, coin2) => coin2 - coin1)
  let memo = new Array(amount + 1).fill(0);

  return calculateCoin(coins, amount, memo)
}
