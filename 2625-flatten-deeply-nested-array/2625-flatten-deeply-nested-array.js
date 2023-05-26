/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
function flat(arr, n) {
  if (n === 0) {
    return arr;
  }

  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      ans.push(arr[i]);
    } else {
      ans.push(...flat(arr[i], n - 1));
    }
  }

  return ans;
}
