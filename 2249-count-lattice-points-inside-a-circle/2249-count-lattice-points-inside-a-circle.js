const distance = (x1, y1, x2, y2) =>
  Math.sqrt(Math.pow(Math.abs(x1 - x2), 2) + Math.pow(Math.abs(y1 - y2), 2));

/**
 * @param {number[][]} circles
 * @return {number}
 */
const countLatticePoints = (circles) => {
  let ans = new Set();
  for (let [x, y, r] of circles) {
    for (let i = x - r; i <= x + r; i++) {
      for (let j = y - r; j <= y + r; j++) {
        if (distance(x, y, i, j) > r) continue;
        ans.add(`${i} + ${j}`);
      }
    }
  }

  return ans.size;
};
