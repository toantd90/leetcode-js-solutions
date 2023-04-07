function lowerBound(arr, start, end, value) {
  while (start < end) {
    const mid = start + Math.floor((end - start) / 2);

    if (arr[mid] < value) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  return start;
}

function upperBound(arr, start, end, value) {
  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);

    if (arr[mid] > value) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return end;
}

/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
function platesBetweenCandles(s, queries) {
  let candleIndexes = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '|') {
      candleIndexes.push(i);
    }
  }

  let platesBetweenCandles = [];

  for (let [start, end] of queries) {
    const left = lowerBound(candleIndexes, 0, candleIndexes.length - 1, start);
    const right = upperBound(
      candleIndexes,
      left,
      candleIndexes.length - 1,
      end
    );
    const plates = candleIndexes[right] - candleIndexes[left] - right + left;

    if (plates > 0) {
      platesBetweenCandles.push(plates);
    } else {
      platesBetweenCandles.push(0);
    }
  }

  return platesBetweenCandles;
}
