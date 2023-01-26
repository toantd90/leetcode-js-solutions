/**
 * @param {number[]} arr
 * @return {number}
 */
function maxChunksToSorted(arr) {
  let max = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i]);

    if (max === i) {
      count++;
    }
  }

  return count;
}
