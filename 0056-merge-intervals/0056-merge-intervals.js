/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
    const sortedIntervals = intervals.toSorted((i1, i2) => i1[0] - i2[0]);

    let mergedIntervals = [];

    let i = 1;
    let current = sortedIntervals[0];

    while (i < sortedIntervals.length) {
        if (sortedIntervals[i][0] > current[1]) {
            mergedIntervals.push(current);
            current = sortedIntervals[i];
        } else {
            current[1] = Math.max(current[1], sortedIntervals[i][1]);
        }

        i++;
    }

    mergedIntervals.push(current);

    return mergedIntervals;
};