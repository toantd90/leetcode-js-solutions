/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
const canAttendMeetings = intervals => {
    intervals.sort((i1, i2) => {
        if (i1[0] < i2[0]) {
            return -1
        } else {
            return 1
        }
    })
    
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < intervals[i - 1][1]) return false
    }
    
    return true
};