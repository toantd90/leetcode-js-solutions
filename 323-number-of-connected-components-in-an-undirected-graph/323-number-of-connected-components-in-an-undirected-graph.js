class DSU {
  constructor(n) {
    this.ranks = []
    this.parent = []
    
    for (let i = 0; i < n; i++) {
      this.ranks[i] = 0
      this.parent[i] = i
    }
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
      return 0
    } 
    
    if (this.ranks[vp] > this.ranks[up]) {
      this.parent[up] = vp
    } else if (this.ranks[up] > this.ranks[vp]) {
      this.parent[vp] = up
    } else {
      this.parent[vp] = up
      this.ranks[up]++
    }
    
    return 1
  }
}


/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
function countComponents(n, edges) {
  let dsu = new DSU(n)
  let components = n
  
  for (let edge of edges) {
    components -= dsu.unionSet(edge[0], edge[1])
  }
  
  return components
};