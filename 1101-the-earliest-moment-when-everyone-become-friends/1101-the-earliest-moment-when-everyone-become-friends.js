class DSU {
  constructor(n) {
    this.ranks = [];
    this.parent = [];

    for (let i = 0; i < n; i++) {
      this.ranks[i] = 0;
      this.parent[i] = i;
    }

    this.friendGroup = n;
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
      return;
    }

    this.friendGroup--;

    if (this.ranks[vp] > this.ranks[up]) {
      this.parent[up] = vp;
    } else if (this.ranks[up] > this.ranks[vp]) {
      this.parent[vp] = up;
    } else {
      this.parent[vp] = up;
      this.ranks[up]++;
    }
  }
}

/**
 * @param {number[][]} logs
 * @param {number} n
 * @return {number}
 */
function earliestAcq(logs, n) {
  let dsu = new DSU(n);

  logs.sort(([time1], [time2]) => time1 - time2);

  for (let i = 0; i < logs.length; i++) {
    const [time, firstPerson, secondPerson] = logs[i];

    dsu.unionSet(firstPerson, secondPerson);

    if (dsu.friendGroup === 1) {
      return time;
    }
  }

  return -1;
}
