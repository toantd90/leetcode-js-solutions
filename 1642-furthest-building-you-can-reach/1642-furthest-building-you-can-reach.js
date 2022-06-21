/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function(heights, bricks, ladders) {
    const minHeap = new MinPriorityQueue()
    
    
    for (let i = 0; i < heights.length; i++) {
        const diff = (heights[i + 1] || heights[i]) - heights[i]
        if (diff <= 0) continue
        
        if (ladders > 0) {
            ladders--
            minHeap.enqueue(diff)
        } else {
            if (!minHeap.isEmpty() && diff > minHeap.front().element) {
                bricks -= minHeap.dequeue().element
                minHeap.enqueue(diff)
            } else {
                bricks -= diff
            }
            
            if (bricks < 0) return i
        }
    }
    
    return heights.length - 1
};