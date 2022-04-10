/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maximumProduct = (nums, k) => {
    let minHeap = new MinPriorityQueue()
    for (let num of nums) {
        minHeap.enqueue(num)
    }
    
    for (let i = 0; i < k; i++) {
        const min = minHeap.dequeue().element
        minHeap.enqueue(min + 1)
    }
    
    let product = 1
    
    for (let { element } of minHeap.toArray()) {
        product = (product * element) % (1e9 + 7)
    }
    
    return product
};