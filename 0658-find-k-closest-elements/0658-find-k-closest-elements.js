function lowerBound(arr, start, end, value) {
  while (start < end) {
    const mid = start + Math.floor((end - start) / 2)

    if (arr[mid] < value) {
      start = mid + 1
    } else {
      end = mid
    }
  }

  return start
}

function isFirstCloser(arr, first, second, target) {
  const firstDiff = Math.abs(arr[first] - target)
  const secondDiff = Math.abs(arr[second] - target)

  return firstDiff < secondDiff ? true : firstDiff === secondDiff ? arr[first] < arr[second] : false
}

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
function findClosestElements(arr, k, x) {
  // arr[index] is greater or equal
  let index = lowerBound(arr, 0, arr.length - 1, x)

  let left = index - k - 1 >= 0 ? index - k - 1 : 0
  let right = index + k + 1 < arr.length ? index + k + 1 : arr.length - 1
  
  while (right - left >= k && left >= 0 && right < arr.length) {
    if (isFirstCloser(arr, left, right, x)) {
      right--
    } else {
      left++
    }
  }

  

  return arr.slice(left, right + 1)
};