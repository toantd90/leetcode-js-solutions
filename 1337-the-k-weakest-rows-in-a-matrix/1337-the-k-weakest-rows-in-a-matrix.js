class Heap {
  constructor(data = []) {
    this.data = data;
    this.comparator = (a, b) =>
      a.soldiers !== b.soldiers ? b.soldiers - a.soldiers : b.index - a.index;
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

const findLastSoldiers = row => {
    let l = 0, r = row.length

    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2)

        if (row[mid] && !row[mid + 1]) {
            return mid + 1
        } else if (row[mid]) {
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
    return 0
}


/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
const kWeakestRows = (mat, k) => {
    const m = mat.length, n = mat[0].length
    let rows = []
    const heap = new Heap();
    
    for (let i = 0; i < m; i++) {
        const soldiers = findLastSoldiers(mat[i])
        console.log(soldiers)
        if (heap.size() < k) {
            heap.offer({ soldiers, index: i });
        } else if (heap.peek().soldiers > soldiers) {
            heap.offer({ soldiers, index: i });
            heap.poll();
        }
    }
    
    const ans = Array(k);
    for (let i = k - 1; i >= 0; i--) {
      ans[i] = heap.poll().index;
    }
    return ans;
};