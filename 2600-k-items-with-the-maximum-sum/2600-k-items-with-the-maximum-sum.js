/**
 * @param {number} numOnes
 * @param {number} numZeros
 * @param {number} numNegOnes
 * @param {number} k
 * @return {number}
 */
function kItemsWithMaximumSum(numOnes, numZeros, numNegOnes, k) {
  return k <= numOnes
    ? k
    : k - numOnes < numZeros
    ? numOnes
    : numOnes - k + numOnes + numZeros;
}
