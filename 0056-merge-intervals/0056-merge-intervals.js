/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
    const sortedIntervals = intervals.toSorted(([start1, end1], [start2, end2]) => {
        if (start1 === start2) {
            return end1 - end2;
        }

        return start1 - start2;
    });

    let ans = [];

    for (let i = 0; i < sortedIntervals.length; i++) {
        let currentInterval = sortedIntervals[i];
        while (i < sortedIntervals.length - 1 && currentInterval[1] >= sortedIntervals[i + 1][0]) {
            currentInterval[1] = Math.max(currentInterval[1], sortedIntervals[i + 1][1]);
            i++;
        }

        ans.push(currentInterval);
    }

    return ans;
};