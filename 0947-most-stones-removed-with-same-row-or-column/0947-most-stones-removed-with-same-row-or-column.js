class UnionFind {
  constructor(numOfSet) {
    this.parents = [];
    this.ranks = [];
    this.numOfSet = numOfSet;

    for (let i = 0; i < numOfSet; i++) {
      this.parents[i] = i;
      this.ranks[i] = 1;
    }
  }

  findSet(index) {
    if (this.parents[index] !== index) {
      this.parents[index] = this.findSet(this.parents[index]);
    }

    return this.parents[index];
  }

  unionSet(index1, index2) {
    const parent1 = this.findSet(index1);
    const parent2 = this.findSet(index2);

    if (parent1 === parent2) {
      return;
    }

    this.numOfSet--;
    if (this.ranks[parent1] > this.ranks[parent2]) {
      this.parents[parent2] = parent1;
    } else if (this.ranks[parent1] < this.ranks[parent2]) {
      this.parents[parent1] = parent2;
    } else {
      this.parents[parent1] = parent2;
      this.ranks[parent2]++;
    }
  }
}

/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function (stones) {
  let unionFind = new UnionFind(stones.length);

  for (let i = 0; i < stones.length; i++) {
    const [rowFirstStone, colFirstStone] = stones[i];

    for (let j = i + 1; j < stones.length; j++) {
      const [rowNextStone, colNextStone] = stones[j];

      if (rowFirstStone !== rowNextStone && colFirstStone !== colNextStone) {
        continue;
      }

      unionFind.unionSet(i, j);
    }
  }

  return stones.length - unionFind.numOfSet;
};
