var divisibilityArray = function(word, m) {
  let n = word.length, div = Array(n).fill(0), sum = 0;
  for (let i = 0; i < n; i++) {
    let digit = Number(word[i]);
    sum = (sum * 10 + digit) % m;
    if (sum === 0) div[i] = 1;
  }
  return div;
};