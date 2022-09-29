class DSU {
  constructor(n) {
    this.ranks = new Array(n + 1).fill(0)
    this.parent = new Array(n + 1).fill().map((_, i) => i)
  }
  
  findSet(u) {
    if (this.parent[u] != u) {
      this.parent[u] = this.findSet(this.parent[u])
    }
    
    return this.parent[u]
  }
  
  unionSet(u, v) {
    const up = this.findSet(u)
    const vp = this.findSet(v)
    
    if (up == vp) {
      return false
    } else if (this.ranks[up] > this.ranks[vp]) {
      this.parent[vp] = up
    } else if (this.ranks[vp] > this.ranks[up]) {
      this.parent[up] = vp
    } else {
      this.parent[up] = vp
      this.ranks[vp]++
    }
    
    return true
  }
}

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
function findRedundantConnection(edges) {
  const n = edges.length
  
  let dsu = new DSU(n)
  
  for (let [u, v] of edges) {
    if (!dsu.unionSet(u, v)) {
      return [u, v]
    }
  }
};