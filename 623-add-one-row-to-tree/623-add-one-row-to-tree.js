function addOneRow(root, val, depth) {
  if (depth === 1) {
    const newNode = new TreeNode(val);
    newNode.left = root;
    return newNode;
  }

  const dfs = (node, d) => {
    if (!node) return;
    if (d >= depth) return
    if (d === depth - 1) {
      const left = new TreeNode(val);
      const right = new TreeNode(val);
      left.left = node.left;
      right.right = node.right;
      node.left = left;
      node.right = right;
      return;
    }
    dfs(node.left, d + 1);
    dfs(node.right, d + 1);
  };

  dfs(root, 1);
  return root;
}
