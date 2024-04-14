const difference = {}

for (let i = 97; i < 123; i++) {
  for (let j = i + 1; j < 123; j++) {
    difference[String.fromCharCode(i) + String.fromCharCode(j)] = j - i;
  }
}

/**
 * @param {string} s
 * @return {number}
 */
function scoreOfString(s) {
  let score = 0;
  for (let i = 1; i < s.length; i++) {
    if (s[i] !== s[i - 1]) {
      if (s[i] < s[i - 1]) {
        score += difference[s[i] + s[i - 1]];
      } else {
        score += difference[s[i - 1] + s[i]];
      }
    }
  }
  
  return score;
};