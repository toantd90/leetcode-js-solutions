/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function maxKelements(nums, k) {
  let maxHeap = new MaxPriorityQueue();

  let score = 0;

  for (let num of nums) {
    maxHeap.enqueue(num);
  }

  for (let i = 0; i < k; i++) {
    const currentNum = maxHeap.dequeue().element;

    score += currentNum;

    maxHeap.enqueue(Math.ceil(currentNum / 3));
  }

  return score;
}
