/**
 * @param {string} colors
 * @return {boolean}
 */
function winnerOfGame(colors) {
  let a = 0;
  let b = 0;

  for (let i = 2; i < colors.length; i++) {
    if (colors[i - 2] === "A" && colors[i - 1] === "A" && colors[i] === "A") {
      a++;
    } else if (
      colors[i - 2] === "B" &&
      colors[i - 1] === "B" &&
      colors[i] === "B"
    ) {
      b++;
    }
  }
  return a > b;
}
