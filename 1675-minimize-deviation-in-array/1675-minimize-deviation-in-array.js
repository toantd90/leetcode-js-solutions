/**
 * @param {number[]} nums
 * @return {number}
 */

class Heap {
  constructor(comparator) {
    this.heap = [];
    this.comparator = comparator;
  }

  compare(element1, element2) {
    if (this.comparator) {
      return this.comparator(element1, element2);
    }
    return element1 < element2;
  }

  getLeftChild(i) {
    return i * 2 + 1;
  }

  getRightChild(i) {
    return i * 2 + 2;
  }

  getParent(i) {
    return Math.floor((i - 1) / 2);
  }

  swap(i1, i2) {
    const temp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = temp;
  }

  peek() {
    return this.heap[0];
  }

  insert(element) {
    this.heap.push(element);
    let i = this.heap.length - 1;
    while (
      i !== 0 &&
      this.compare(this.heap[i], this.heap[this.getParent(i)])
    ) {
      this.swap(i, this.getParent(i));
      i = this.getParent(i);
    }
  }

  extract() {
    const root = this.heap[0];
    if (this.size() === 1) {
      this.clear();
      return root;
    }

    this.heap[0] = this.heap.pop();
    this.heapify(0);

    return root;
  }

  heapify(i) {
    let left = this.getLeftChild(i);
    let right = this.getRightChild(i);
    let smallest = i;

    if (
      left < this.heap.length &&
      this.compare(this.heap[left], this.heap[smallest])
    )
      smallest = left;

    if (
      right < this.heap.length &&
      this.compare(this.heap[right], this.heap[smallest])
    )
      smallest = right;

    if (smallest !== i) {
      this.swap(smallest, i);
      this.heapify(smallest);
    }
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  clear() {
    this.heap = [];
  }
}

const minimumDeviation = (nums) => {
  let maxHeap = new Heap((n1, n2) => n2 < n1);
  let min = 1e9 + 1;

  nums.forEach((n, i) => {
    const num = n % 2 ? n * 2 : n;
    maxHeap.insert(num);
    min = Math.min(min, num);
  });

  let ans = 1e9 + 1;

  while (maxHeap.peek() % 2 === 0) {
    const node = maxHeap.extract();
    ans = Math.min(ans, node - min);
    maxHeap.insert(node / 2);
    min = Math.min(min, node / 2);
  }

  return Math.min(ans, maxHeap.peek() - min);
};
