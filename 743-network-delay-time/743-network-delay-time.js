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
    constructor(node, distance) {
        this.node = node
        this.distance = distance
    }
}

class WeightedGraph {
    constructor(adjacencyList) {
        this.adjacencyList = adjacencyList
    }
    
    dijkstra(start) {
        let priorityQueue = new Heap((node1, node2) => node1.distance - node2.distance)
        let distances = new Array(this.adjacencyList.length).fill(Number.POSITIVE_INFINITY)

        priorityQueue.insert(new Node(start, 0))
        distances[start] = 0
        
        while (!priorityQueue.isEmpty()) {
            const { node, distance } = priorityQueue.extract()
            if (distances[node] !== distance) continue;

            if (this.adjacencyList[node]) {
                for (const next of this.adjacencyList[node]) {
                    const [nextNode, nextDistance] = next
                    const newDistance = distance + nextDistance
                    if (distances[nextNode] > newDistance) {
                        distances[nextNode] = newDistance
                        priorityQueue.insert(new Node(nextNode, newDistance))
                    }
                }
            }
        }
        
        return distances
    }
}


/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const networkDelayTime = (times, n, k) => {
    let adjacencyList = new Array(n).fill().map(_ => new Array())
    
    for (let [start, end, weight] of times) {
        adjacencyList[start - 1].push([end - 1, weight])
    }
    
    const graph = new WeightedGraph(adjacencyList)
    
    const dist = graph.dijkstra(k - 1)
    
    let delayTime = Number.NEGATIVE_INFINITY
    
    for (let i = 0; i < n; i++) {
        if (i === k - 1) continue
        if (dist[i] === Number.POSITIVE_INFINITY) return -1
        delayTime = Math.max(delayTime, dist[i])
    }
    
    return delayTime
};