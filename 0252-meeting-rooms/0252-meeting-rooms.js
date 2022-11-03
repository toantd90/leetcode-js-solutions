/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
function canAttendMeetings(intervals) {
  intervals.sort(([start1, end1], [start2, end2]) => {
    if (start1 > start2) {
      return 1
    } else if (start1 < start2) {
      return -1
    } else {
      return end1 > end2 ? 1 : -1
    }
  })
  
  for (let i = 1; i < intervals.length; i++) {
    const [currentStart, currentEnd] = intervals[i]
    const [previousStart, previousEnd] = intervals[i - 1]
    if (previousStart == currentStart || previousEnd > currentStart || previousEnd >= currentEnd) {
        return false
    }
  }
  
  return true
};