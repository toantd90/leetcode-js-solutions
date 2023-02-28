/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
function kSmallestPairs(nums1, nums2, k) {
  let i1 = 0;
  let i2 = 0;

  let minHeap = new MinPriorityQueue({
    priority: ([num1, num2, _]) => num1 + num2,
  });

  for (let num of nums1) {
    minHeap.enqueue([num, nums2[0], 0]);
  }

  let ans = [];

  while (k-- > 0 && minHeap.size() > 0) {
    const [num1, num2, index] = minHeap.dequeue().element;
    ans.push([num1, num2]);

    if (index === nums2.length - 1) continue;

    minHeap.enqueue([num1, nums2[index + 1], index + 1]);
  }

  return ans;
}
