class DSU {
  constructor(n) {
    this.parent = [];
    this.ranks = [];
    for (let i = 0; i < n; i++) {
      this.ranks[i] = 0;
      this.parent[i] = i;
    }
  }

  findSet(u) {
    if (this.parent[u] != u) {
      this.parent[u] = this.findSet(this.parent[u]);
    }

    return this.parent[u];
  }

  unionSet(u, v) {
    const up = this.findSet(u);
    const vp = this.findSet(v);

    if (up == vp) {
      return false;
    } else if (this.ranks[up] < this.ranks[vp]) {
      this.parent[up] = vp;
    } else if (this.ranks[vp] < this.ranks[up]) {
      this.parent[vp] = up;
    } else {
      this.parent[vp] = up;
      this.ranks[up]++;
    }

    return true;
  }
}

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
function validTree(n, edges) {
  if (edges.length < n - 1) return false
  
  let dsu = new DSU(n);

  for (let [u, v] of edges) {
    if (!dsu.unionSet(u, v)) {
      return false;
    }
  }

  return true;
}
