/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.queue = new MinPriorityQueue();
  this.size = k

  for (let i = 0; i < Math.min(k, nums.length); i++) {
    this.queue.enqueue(nums[i]);
  }

  for (let i = k; i < nums.length; i++) {
    if (!this.queue.front()) {
      this.queue.enqueue(nums[i]);
    } else if (this.queue.front().element < nums[i]) {
      this.queue.dequeue();
      this.queue.enqueue(nums[i]);
    }
  }
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  if (!this.queue.front() || this.queue.size() < this.size) {
    this.queue.enqueue(val);
  } else if (this.queue.front().element < val) {
    this.queue.dequeue();
    this.queue.enqueue(val);
  }

  return this.queue.front().element;
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
