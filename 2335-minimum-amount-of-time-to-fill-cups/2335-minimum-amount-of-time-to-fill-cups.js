/**
 * @param {number[]} amount
 * @return {number}
 */
function fillCups(amount) {
  let max = 0,
    sum = 0;
  for (let cup of amount) {
    max = Math.max(max, cup);
    sum += cup;
  }

  return max + (sum - 2 * max > 0 ? Math.ceil((sum - 2 * max) / 2) : 0);
}
