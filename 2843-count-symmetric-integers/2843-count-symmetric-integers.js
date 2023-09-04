/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
function countSymmetricIntegers(low, high) {
  let count = 0;
  for (let num = low; num <= high; num++) {
    const str = num.toString();
    let firstHalf = 0;
    let secondHalf = 0;
    for (let i = 0; i < str.length / 2; i++) {
      firstHalf += Number(str[i]);
      secondHalf += Number(str[str.length / 2 + i]);
    }

    if (firstHalf === secondHalf) count++;
  }

  return count;
}
