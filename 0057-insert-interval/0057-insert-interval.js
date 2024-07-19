/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  if (!intervals.length) return [newInterval];

  let newIntervals = [];
  let i = 0;

  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    newIntervals.push(intervals[i++]);
  }

  // intervals[i][1] >= newInterval[0]
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }
  newIntervals.push(newInterval);
  newIntervals.push(...intervals.slice(i));

  return newIntervals;
};
