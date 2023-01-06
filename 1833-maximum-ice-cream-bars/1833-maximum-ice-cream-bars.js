/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
function maxIceCream(costs, coins) {
  costs.sort((c1, c2) => c1 - c2);

  let numOfIceCream = 0;
  let costSoFar = 0;
  while (costSoFar + costs[numOfIceCream] <= coins) {
    costSoFar += costs[numOfIceCream];
    numOfIceCream++;
  }

  return numOfIceCream;
}
