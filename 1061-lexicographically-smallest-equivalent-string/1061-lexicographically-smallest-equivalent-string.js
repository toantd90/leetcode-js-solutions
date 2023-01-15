class UnionFind {
  constructor(n) {
    this.parent = new Array(n);
    this.makeSet(n);
  }

  makeSet(n) {
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
    }
  }

  findSet(u) {
    if (this.parent[u] !== u) {
      this.parent[u] = this.findSet(this.parent[u]);
    }

    return this.parent[u];
  }

  unionSet(u, v) {
    u = this.findSet(u);
    v = this.findSet(v);

    if (u == v) {
      return;
    }

    if (u < v) {
      this.parent[v] = u;
    } else {
      this.parent[u] = v;
    }
  }
}

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
function smallestEquivalentString(s1, s2, baseStr) {
  const n = s1.length;
  let unionFind = new UnionFind(26);

  for (let i = 0; i < n; i++) {
    unionFind.unionSet(s1.charCodeAt(i) - 97, s2.charCodeAt(i) - 97);
  }

  let ans = '';
  for (let i = 0; i < baseStr.length; i++) {
    ans += String.fromCharCode(
      unionFind.findSet([baseStr.charCodeAt(i) - 97]) + 97
    );
  }

  return ans;
}
