var SmallestInfiniteSet = function () {
  this.set = new Set();
  this.priorityQueue = new MinPriorityQueue();

  for (let i = 1; i <= 1000; i++) {
    this.set.add(i);
    this.priorityQueue.enqueue(i);
  }
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function () {
  const smallest = this.priorityQueue.dequeue().element;
  this.set.delete(smallest);

  return smallest;
};

/**
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function (num) {
  if (!this.set.has(num)) {
    this.set.add(num);
    this.priorityQueue.enqueue(num);
  }
};

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
