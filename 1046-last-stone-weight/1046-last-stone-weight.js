/**
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeight = stones => {
    const maxHeap = new MaxPriorityQueue()
    
    for (let weight of stones) {
        maxHeap.enqueue(weight)
    }
    
    while (maxHeap.size() > 1) {
        const first = maxHeap.dequeue()
        const second = maxHeap.dequeue()
        
        if (first.element !== second.element) {
            maxHeap.enqueue(Math.abs(first.element - second.element))
        }
    }
    
    return maxHeap.size() === 1 ? maxHeap.dequeue().element : 0
};