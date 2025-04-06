/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
function insert(intervals, newInterval) {
    let newIntervals = [];

    for (let i = 0; i < intervals.length; i++) {
        if (newInterval[0] <= intervals[i][1]) {
            break;
        }

        newIntervals.push(intervals[i]);
    }

    if (newIntervals.length === intervals.length) {
        return [...newIntervals, newInterval];
    }


    let i = newIntervals.length;
    let start = Math.min(newInterval[0], intervals[i][0]);
    let end = newInterval[1];
    while (i < intervals.length && newInterval[1] >= intervals[i][0]) {
        end = Math.max(end, intervals[i][1]);
        i++;
    }

    newIntervals.push([start, end]);
    newIntervals.push(...intervals.slice(i));
    return newIntervals;
};