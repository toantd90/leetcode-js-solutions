var distanceK = function (root, target, k) {
  const parentsMap = findParent(root);

  let currLevel = 0;
  const q = [target];
  const seen = new Set();
  const ans = [];

  while (q.length) {
    let currSize = q.length;

    for (let i = 0; i < currSize; i++) {
      let curr = q[i];
      if (seen.has(curr.val)) continue;

      if (currLevel === k) {
        ans.push(curr.val);
        continue;
      }

      seen.add(curr.val);

      if (curr.left) q.push(curr.left);
      if (curr.right) q.push(curr.right);
      if (parentsMap[curr.val]) q.push(parentsMap[curr.val]);
    }
    q.splice(0, currSize);
    currLevel++;
  }
  return ans;
};

const findParent = (root) => {
  const parents = {};

  const dfs = (root) => {
    if (root.left) {
      parents[root.left.val] = root;
      dfs(root.left);
    }
    if (root.right) {
      parents[root.right.val] = root;
      dfs(root.right);
    }
    return;
  };

  dfs(root);
  return parents;
};
