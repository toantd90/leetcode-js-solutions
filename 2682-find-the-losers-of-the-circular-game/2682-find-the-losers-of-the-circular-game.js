/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
function circularGameLosers(n, k) {
  let friends = Array(n).fill(false);
  let next = 0;
  let multiple = 1;

  while (!friends[next]) {
    friends[next] = true;

    next = (next + multiple * k) % n;
    multiple++;
  }

  let ans = [];
  friends.forEach((friend, index) => {
    if (!friend) {
      ans.push(index + 1);
    }
  });
  return ans;
}
