/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
  intervals.sort(([start1, end1], [start2, end2]) => start1 - start2);
  let mergedIntervals = [];

  for (let i = 0; i < intervals.length; i++) {
    let j = i;
    let mergedInterval = intervals[i];

    while (
      j <= intervals.length - 2 &&
      intervals[j + 1][0] <= mergedInterval[1]
    ) {
      mergedInterval[1] = Math.max(mergedInterval[1], intervals[j + 1][1]);
      j++;
    }
    i = j;

    mergedIntervals.push(mergedInterval);
  }

  return mergedIntervals;
}
