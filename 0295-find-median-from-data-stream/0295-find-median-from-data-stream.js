var MedianFinder = function () {
  this.minHeap = new MinPriorityQueue();
  this.maxHeap = new MaxPriorityQueue();
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  if (this.minHeap.size() === 0) {
    this.minHeap.enqueue(num);
  } else if (this.minHeap.size() == this.maxHeap.size()) {
    if (num > this.maxHeap.front().element) {
      this.minHeap.enqueue(num);
    } else {
      this.minHeap.enqueue(this.maxHeap.dequeue().element);
      this.maxHeap.enqueue(num);
    }
  } else {
    if (this.minHeap.front().element < num) {
      this.maxHeap.enqueue(this.minHeap.dequeue().element);
      this.minHeap.enqueue(num);
    } else {
      this.maxHeap.enqueue(num);
    }
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if (this.minHeap.size() === this.maxHeap.size()) {
    return (this.minHeap.front().element + this.maxHeap.front().element) / 2;
  } else {
    return this.minHeap.front().element;
  }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
