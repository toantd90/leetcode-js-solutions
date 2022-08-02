/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
  let minHeap = new MinPriorityQueue()
  const n = matrix.length
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      minHeap.enqueue(matrix[i][j])
    }
  }
  
  for (let i = 0; i < k - 1; i++) {
    minHeap.dequeue()
  }
  
  return minHeap.dequeue().element
};