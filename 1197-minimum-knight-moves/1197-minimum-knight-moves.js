let memo;
const minKnightMoves = function (x, y) {
  return helper(x, y);
};

const helper = function (x, y) {
  x = Math.abs(x);
  y = Math.abs(y);
  let k = `${x}-${y}`;
  if (!memo.has(k)) {
    let v = 0;
    if (x + y == 0) {
      v = 0;
    } else if (x + y == 2) {
      v = 2;
    } else {
      v = Math.min(helper(x - 2, y - 1), helper(x - 1, y - 2)) + 1;
    }
    memo.set(k, v);
  }
  return memo.get(k);
};
