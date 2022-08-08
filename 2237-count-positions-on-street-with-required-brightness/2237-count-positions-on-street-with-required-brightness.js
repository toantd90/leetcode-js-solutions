/**
 * @param {number} n
 * @param {number[][]} lights
 * @param {number[]} requirement
 * @return {number}
 */
function meetRequirement(n, lights, requirement) {
  let prefix = new Array(n).fill(0);

  for (let [position, range] of lights) {
    prefix[Math.max(0, position - range)] += 1;
    const end = position + range + 1
    if (end <= n - 1) prefix[end] -= 1;
  }

  let cnt = prefix[0] >= requirement[0] ? 1 : 0;
  for (let i = 1; i < n; i++) {
    prefix[i] += prefix[i - 1];

    if (prefix[i] >= requirement[i]) cnt++;
  }

  return cnt;
}
