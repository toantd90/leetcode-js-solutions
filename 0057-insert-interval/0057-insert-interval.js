/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    let newIntervals = [];

    if (!intervals.length) {
        return [newInterval];
    }

    if (newInterval[1] < intervals[0][0]) {
        return [newInterval, ...intervals];
    }

    if (newInterval[0] > intervals[intervals.length - 1][1]) {
        return [...intervals, newInterval];
    }

    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i][1] < newInterval[0] || intervals[i][0] > newIntervals[1]) {
            newIntervals.push(intervals[i]);
        } else {
            if (intervals[i][0] <= newInterval[0] && intervals[i][1] >= newInterval[1]) {
                return intervals;
            }

            let mergedInteral = newInterval;
            while (intervals[i] && (intervals[i][0] <= mergedInteral[1] || intervals[i][1] <= mergedInteral[0])) {
                mergedInteral[0] = Math.min(intervals[i][0], mergedInteral[0]);
                mergedInteral[1] = Math.max(intervals[i][1], mergedInteral[1]);
                i++;
            }

            newIntervals.push(mergedInteral);
            newIntervals.push(...intervals.slice(i))
            return newIntervals;
        }
    }

    return newIntervals;
};