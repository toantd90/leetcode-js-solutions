/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let maxHeap = new MaxPriorityQueue()
    
    nums.forEach(num => maxHeap.enqueue(num))
    
    for (let i = 0; i < k - 1; i++) {
        maxHeap.dequeue()
    }
    
    return maxHeap.dequeue().element
};