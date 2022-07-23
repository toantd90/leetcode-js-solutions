class NumberContainers {
  constructor() {
    this.nums = {};
    this.numMap = {};
  }

  change(index, number) {
    this.nums[index] = number;

    if (!this.numMap[number]) {
      this.numMap[number] = new MinPriorityQueue();
    }

    this.numMap[number].enqueue(index);
  }

  find(number) {
    while (
      this.numMap[number] &&
      this.numMap[number].size() > 0 &&
      this.nums[this.numMap[number].front().element] !== number
    ) {
      this.numMap[number].dequeue();
    }

    return this.numMap[number] && this.numMap[number].size() > 0
      ? this.numMap[number].front().element
      : -1;
  }
}
