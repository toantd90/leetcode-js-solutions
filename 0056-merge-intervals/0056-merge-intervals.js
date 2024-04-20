/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
  intervals.sort((interval1, interval2) => {
    const [start1, end1] = interval1;
    const [start2, end2] = interval2;

    if (start1 < start2) {
      return -1;
    } else if (start1 > start2) {
      return 1;
    } else {
      if (end1 < end2) {
        return -1;
      } else {
        return 1;
      }
    }
  });

  let i = 0;
  let mergedIntervals = [];

  while (i < intervals.length) {
    let currentInterval = intervals[i];
    while (
      intervals[i + 1] &&
      intervals[i + 1][0] >= currentInterval[0] &&
      intervals[i + 1][0] <= currentInterval[1]
    ) {
      currentInterval[1] = Math.max(currentInterval[1], intervals[i + 1][1]);
      i++;
    }
    mergedIntervals.push(currentInterval);
    i++;
  }

  return mergedIntervals;
}
