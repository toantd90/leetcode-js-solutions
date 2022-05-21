/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
const countOdds = (low, high) => low % 2 === 0 && high % 2 === 0 ? (high - low) / 2 : Math.floor((high - low) / 2) + 1
