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
    const root = this.heap.shift();
    this.heap.unshift(this.heap[this.heap.length - 1]);
    this.heap.pop();

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

const dijkstra = (s, graph, dist) => {
    let maxHeap = new MaxPriorityQueue({ priority: x => x[1] });
    maxHeap.enqueue([s, 1])
    
    while (!maxHeap.isEmpty()) {
        const [u, w] = maxHeap.dequeue().element
        if (dist[u] > w) continue
        
        for (let [v, newW] of graph[u]) {
            if (w * newW > dist[v]) {
                dist[v] = w * newW
                maxHeap.enqueue([v, dist[v]])
            }
        }
    }
}



/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
const maxProbability = (n, edges, succProb, start, end) => {
    let dist = new Array(n).fill(-Infinity)
    
    let graph = new Array(n).fill().map(_ => new Array())
    
    for (let i = 0; i < edges.length; i++) {
        const [u, v] = edges[i]
        const w = succProb[i]
        graph[u].push([v, w])
        graph[v].push([u, w])
    }
    
    dijkstra(start, graph, dist)
    
    return dist[end] === -Infinity ? 0 : dist[end]
};