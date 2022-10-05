function addOneRow(root, val, depth) {
  if (depth === 1) {
    return new TreeNode(val, root);
  }

  const dfs = (node, d) => {
    if (!node) return;
    if (d === depth - 1) {
      node.left = new TreeNode(val, node.left);
      node.right = new TreeNode(val, null, node.right);
      return;
    }
    dfs(node.left, d + 1);
    dfs(node.right, d + 1);
  };

  dfs(root, 1);
  return root;
}
