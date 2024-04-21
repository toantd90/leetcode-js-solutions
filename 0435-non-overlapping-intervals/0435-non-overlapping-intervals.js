/**
 * @param {number[][]} intervals
 * @return {number}
 */
function eraseOverlapIntervals(intervals) {
    intervals.sort(([start1, end1], [start2, end2]) => end1 - end2);

    console.log(intervals);

    let i = 0;
    let numOfIntervals = 0;

    while (i < intervals.length) {
        let currentInterval = intervals[i];

        while (intervals[i + 1] && currentInterval[1] > intervals[i + 1][0]) {
            numOfIntervals++;
            i++;
        }
        i++;
    }

    return numOfIntervals;
};