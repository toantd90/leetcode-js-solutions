/**
 * @param {number[]} nums
 * @return {number}
 */
const halveArray = nums => {
    const maxPQ = new MaxPriorityQueue()
    let sum = 0
    for (let num of nums) {
        sum += num
        maxPQ.enqueue(num)
    }
    
    let afterReduced = sum / 2
    let cnt = 0
    
    while (sum > afterReduced) {
        const removed = maxPQ.dequeue().element
        const half = removed / 2
        sum -= half
        maxPQ.enqueue(half)
        cnt++
    }
    
    return cnt++
};