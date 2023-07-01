/**
 * @param {string[]} words
 * @return {string[]}
 */
function findWords(words) {
  const rows = [
    new Set(["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]),
    new Set(["a", "s", "d", "f", "g", "h", "j", "k", "l"]),
    new Set(["z", "x", "c", "v", "b", "n", "m"]),
  ];

  return words.filter((word) => {
    const lowerWord = word.toLowerCase();
    const row = rows.find((set) => set.has(lowerWord[0]));
    return word.split("").every((letter) => row.has(letter.toLowerCase()));
  });
}
