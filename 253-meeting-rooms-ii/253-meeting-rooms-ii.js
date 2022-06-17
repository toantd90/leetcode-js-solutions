/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    let queue = new MinPriorityQueue()
    
    intervals.sort((i1, i2) => {
        if (i1[0] > i2[0]) {
            return 1
        } else if (i1[0] < i2[0]) {
            return -1
        } else {
            if (i1[1] > i2[1]) {
                return 1
            } else {
                return -1
            }
        }
    })
    
    
    intervals.forEach(interval => {
        if (!queue.front()) {
            queue.enqueue(interval[1])
        } else {
            if (interval[0] >= queue.front().element) {
                queue.dequeue()
            }
            
            queue.enqueue(interval[1])
        }
    })
    
    return queue.size()
};