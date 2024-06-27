/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    let newIntervals = []

    let index = 0;

    while (index < intervals.length && intervals[index][1] < newInterval[0]) {
        newIntervals.push(intervals[index]);
        index++;
    }

    // intervals[index][1] >= newInterval[0]

    while (index < intervals.length && intervals[index][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[index][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[index][1]);
        index++;
    }

    newIntervals.push(newInterval);

    // intervals[index][0] > newInterval[1]

    newIntervals.push(...intervals.slice(index));

    return newIntervals;
};