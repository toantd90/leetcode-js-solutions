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
    constructor(vertex, difference) {
        this.vertex = vertex
        this.difference = difference
    }
}

class WeightedGraph {
    constructor() {
        this.adjacencyList = {}
    }
    
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }
    
    addEdge(from, to, difference) {
        if (!this.adjacencyList[from]) this.adjacencyList[from] = [];
        if (!this.adjacencyList[to]) this.adjacencyList[to] = []
        this.adjacencyList[from].push(new Node(to, difference))
        this.adjacencyList[to].push(new Node(from, difference))
    }
    
    dijkstra(start, end) {
        let priorityQueue = new Heap((node1, node2) => node1.difference < node2.difference)
        let differenceList = {}
        for (let v in this.adjacencyList) {
            differenceList[v] = Infinity;
        }
        differenceList[start] = 0
        priorityQueue.insert(new Node(start, 0))
        
        while (!priorityQueue.isEmpty()) {
            const curNode = priorityQueue.extract()
            if (differenceList[curNode.vertex] !== curNode.difference) continue;
            if (curNode.vertex === end) break;
            for (const {vertex, difference} of this.adjacencyList[curNode.vertex]) {
                const cost = Math.max(difference, curNode.difference)
                if (differenceList[vertex] > cost) {
                    differenceList[vertex] = cost
                    
                    priorityQueue.insert(new Node(vertex, cost))
                }
            }
        }
        
        return differenceList[end]
    }
}


/**
 * @param {number[][]} heights
 * @return {number}
 */
const minimumEffortPath = heights => {
    const rows = heights.length
    const cols = heights[0].length
    
    let graph = new WeightedGraph()
    
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const cur = row * cols + col % cols
            const right = cur + 1
            const bottom = cur + cols
            
            if (col + 1 < cols) {
                graph.addEdge(cur, right, Math.abs(heights[row][col] - heights[row][col + 1]))
            }
            
            if (row + 1 < rows) {
                graph.addEdge(cur, bottom, Math.abs(heights[row][col] - heights[row + 1][col]))
            }
        }
    }
    
    return graph.dijkstra(0, rows * cols - 1)
};