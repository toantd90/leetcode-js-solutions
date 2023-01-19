/**
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * function ArrayReader() {
 *     // Compares the sum of arr[l..r] with the sum of arr[x..y]
 *     // return 1 if sum(arr[l..r]) > sum(arr[x..y])
 *     // return 0 if sum(arr[l..r]) == sum(arr[x..y])
 *     // return -1 if sum(arr[l..r]) < sum(arr[x..y])
 *     @param {number} l, r, x, y
 *     @return {number}
 *     this.compareSub = function(l, r, x, y) {
 *         ...
 *     };
 *
 *     // Returns the length of the array
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {ArrayReader} reader
 * @return {number}
 */
function getIndex(reader) {
  const n = reader.length();

  let start = 0;
  let end = n - 1;

  while (start < end) {
    const numOfInt = end - start + 1;
    if (numOfInt % 2 === 0) {
      const compare = reader.compareSub(
        start,
        start + numOfInt / 2 - 1,
        start + numOfInt / 2,
        end
      );

      if (compare == 1) {
        end = start + numOfInt / 2 - 1;
      } else {
        start += numOfInt / 2;
      }
    } else {
      const compare = reader.compareSub(
        start,
        start + Math.floor(numOfInt / 2) - 1,
        start + Math.floor(numOfInt / 2) + 1,
        end
      );

      if (compare == 1) {
        end = start + Math.floor(numOfInt / 2) - 1;
      } else if (compare == -1) {
        start += Math.floor(numOfInt / 2) + 1;
      } else {
        return start + Math.floor(numOfInt / 2);
      }
    }
  }

  return start;
}
