/**
 * @param {string} word
 * @return {string}
 */
function compressedString(word) {
  let start = 0;
  let end = 1;
  let comp = "";

  while (end <= word.length) {
    while (word[end] === word[start]) {
      end++;
    }

    if (end - start <= 9) {
      comp += `${end - start}${word[start]}`;
    } else {
      comp += `9${word[start]}`.repeat(Math.floor((end - start) / 9));

      if ((end - start) % 9 > 0) {
        comp += `${(end - start) % 9}${word[start]}`;
      }
    }

    start = end;
    end++;
  }

  return comp;
}
