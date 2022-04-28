/**
 * @param {number[][]} heights
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

class Node {
  constructor(node, cost) {
    this.node = node;
    this.cost = cost;
  }
}

class Vertex {
  constructor(node, weight) {
    this.node = node;
    this.weight = weight;
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(v) {
    if (!this.adjacencyList[v]) this.adjacencyList[v] = [];
  }

  addEdge(v1, v2, w) {
    if (!this.adjacencyList[v1]) this.adjacencyList[v1] = [];
    if (!this.adjacencyList[v2]) this.adjacencyList[v2] = [];
    this.adjacencyList[v1].push(new Vertex(v2, w));
    this.adjacencyList[v2].push(new Vertex(v1, w));
  }

  dijkstra(s, t) {
    const minHeap = new Heap((v1, v2) => {
      return v1.cost < v2.cost;
    });
    const distance = {};

    for (let v in this.adjacencyList) {
      distance[v] = Infinity;
    }
    distance[s] = 0;
    minHeap.insert(new Node(s, 0));

    while (minHeap.size() > 0) {
      const smallest = minHeap.extract();
      const u = smallest.node;
      const w = smallest.cost;
      if (distance[u] !== w) continue;
      if (u === t) break;

      for (let neighbor of this.adjacencyList[u] || []) {
        const v = neighbor.node;
        const newW = Math.max(w, neighbor.weight);
        if (newW < distance[v]) {
          distance[v] = newW;
          minHeap.insert(new Node(v, newW));
        }
      }
    }

    return distance;
  }
}
const minimumEffortPath = function(heights) {
  const m = heights.length
  const n = heights[0].length
  let graph = new WeightedGraph()
  
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const node = i * n + j % n
      const right = node + 1
      const below = node + n
      if (j + 1 < n)
        graph.addEdge(node, right, Math.abs(heights[i][j] - heights[i][j + 1]))
      if (i + 1 < m)
        graph.addEdge(node, below, Math.abs(heights[i][j] - heights[i + 1][j]))
    }
  }
  
  const distance = graph.dijkstra(0, m * n - 1);
  return distance[m * n - 1]
};