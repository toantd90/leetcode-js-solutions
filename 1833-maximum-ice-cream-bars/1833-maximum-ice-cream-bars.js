/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
function maxIceCream(costs, coins) {
  costs.sort((c1, c2) => c1 - c2);
  
  let numOfIcecream = 0
  let costSoFar = 0
  while (costSoFar + costs[numOfIcecream] <= coins) {
    costSoFar += costs[numOfIcecream]
    numOfIcecream++
  }
  
  return numOfIcecream
};