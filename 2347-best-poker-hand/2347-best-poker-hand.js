/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
const bestHand = (ranks, suits) => {
  if (suits[0] == suits[1] && suits[0] == suits[2] && suits[0] == suits[3] && suits[0] == suits[4]) {
    return "Flush"
  }
  
  if (ranks.filter(rank => rank == ranks[0]).length >= 3 || ranks.filter(rank => rank == ranks[1]).length >= 3 || ranks.filter(rank => rank == ranks[2]).length >= 3) {
    return "Three of a Kind"
  }
  
  if (ranks.filter(rank => rank == ranks[0]).length >= 2 || ranks.filter(rank => rank == ranks[1]).length >= 2 || ranks.filter(rank => rank == ranks[2]).length >= 2 || ranks.filter(rank => rank == ranks[3]).length >= 2) {
    return "Pair"
  }
  
  return "High Card"
};