/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
function kSmallestPairs(nums1, nums2, k) {
  let maxHeap = new MaxPriorityQueue({
    priority: ([num1, num2]) => num1 + num2,
  });

  for (let i = 0; i < Math.min(nums1.length, k); i++) {
    for (let j = 0; j < Math.min(nums2.length, k); j++) {
      if (maxHeap.size() < k) {
        maxHeap.enqueue([nums1[i], nums2[j]]);
      } else {
        if (
          maxHeap.front().element[0] + maxHeap.front().element[1] >
          nums1[i] + nums2[j]
        ) {
          maxHeap.dequeue();
          maxHeap.enqueue([nums1[i], nums2[j]]);
        }
      }
    }
  }

  return maxHeap.toArray().map(({ element }) => element);
}
