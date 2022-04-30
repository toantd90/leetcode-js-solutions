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
    
    dijkstra(start, end) {
        let priorityQueue = new Heap((node1, node2) => node1.distance - node2.distance)
        let distances = {}
        for (let v in this.adjacencyList) {
            distances[v] = Infinity;
        }
        if (distances[start])
            distances[start] = 1
        else
            distances[start] = -1

        priorityQueue.insert(new Node(start, 1))
        
        while (!priorityQueue.isEmpty()) {
            const { node, distance } = priorityQueue.extract()
            if (distances[node] !== distance) continue;

            if (this.adjacencyList[node]) {
                for (const next of this.adjacencyList[node]) {
                    const [nextNode, nextDistance] = next
                    const newDistance = distance * nextDistance
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
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
const calcEquation = (equations, values, queries) => {
    let adjacencyList = {}
    for (let i = 0; i < equations.length; i++) {
        const [s, t] = equations[i]
        if (!adjacencyList[s]) adjacencyList[s] = []
        if (!adjacencyList[t]) adjacencyList[t] = []
        adjacencyList[s].push([t, values[i]])
        adjacencyList[t].push([s, 1 / values[i]])
    }
    
    const graph = new WeightedGraph(adjacencyList)
    
    const distances = {}
    let result = []
    for (const [start, end] of queries) {
        if (!distances[start])
            distances[start] = graph.dijkstra(start, end)
        result.push(distances[start][end] === Infinity || !distances[start][end] ? -1 : distances[start][end])
    }
    
    return result
};