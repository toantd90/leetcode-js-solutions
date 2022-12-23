class Heap {
  constructor(data = []) {
    this.data = data;
    this.comparator = (a, b) => a[2] - b[2];
    this.heapify();
  }

  // O(nlog(n)). In fact, O(n)
  heapify() {
    if (this.size() < 2) return;
    for (let i = 1; i < this.size(); i++) {
      this.bubbleUp(i);
    }
  }

  // O(1)
  peek() {
    if (this.size() === 0) return null;
    return this.data[0];
  }

  // O(log(n))
  offer(value) {
    this.data.push(value);
    this.bubbleUp(this.size() - 1);
  }

  // O(log(n))
  poll() {
    if (this.size() === 0) return null;
    const result = this.data[0];
    const last = this.data.pop();
    if (this.size() !== 0) {
      this.data[0] = last;
      this.bubbleDown(0);
    }
    return result;
  }

  // O(log(n))
  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = (index - 1) >> 1;
      if (this.comparator(this.data[index], this.data[parentIndex]) < 0) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  // O(log(n))
  bubbleDown(index) {
    const lastIndex = this.size() - 1;
    while (true) {
      const leftIndex = index * 2 + 1;
      const rightIndex = index * 2 + 2;
      let findIndex = index;
      if (
        leftIndex <= lastIndex &&
        this.comparator(this.data[leftIndex], this.data[findIndex]) < 0
      ) {
        findIndex = leftIndex;
      }
      if (
        rightIndex <= lastIndex &&
        this.comparator(this.data[rightIndex], this.data[findIndex]) < 0
      ) {
        findIndex = rightIndex;
      }
      if (index !== findIndex) {
        this.swap(index, findIndex);
        index = findIndex;
      } else {
        break;
      }
    }
  }

  // O(1)
  swap(index1, index2) {
    [this.data[index1], this.data[index2]] = [
      this.data[index2],
      this.data[index1]
    ];
  }

  // O(1)
  size() {
    return this.data.length;
  }
    
    
  toArray() {
    return this.data.reverse().map(dt => dt.index)
  }
}


function tripCompare(trip1, trip2) {
  const [_1, from1, to1] = trip1;
  const [_2, from2, to2] = trip2;

  if (from1 < from2) {
    return -1;
  } else if (from1 > from2) {
    return 1;
  } else {
    if (to1 < to2) {
      return -1;
    } else {
      return 1;
    }
  }
}



/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
function carPooling(trips, capacity) {
  const sortedTrips = [...trips].sort(tripCompare);

  let toQueue = new Heap();
  let currentCapacity = capacity;

  for (let i = 0; i < sortedTrips.length; i++) {
    const [numPassengers, from, to] = sortedTrips[i];

    while (toQueue.size() > 0 && toQueue.peek()[2] <= from) {
      currentCapacity += toQueue.poll()[0];
    }

    toQueue.offer(sortedTrips[i]);
    currentCapacity -= numPassengers;

    if (currentCapacity < 0) return false;
  }

  return true;
}
