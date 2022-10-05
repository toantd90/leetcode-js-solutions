/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
function addOneRow(root, val, depth) {
  if (depth == 1) {
    return new TreeNode(val, root)
  }
  
  let queue = [root]
  let currentDepth = 1
  let nodes = []
  
  while (queue.length && currentDepth < depth) {
    const size = queue.length
    
    for (let i = 0; i < size; i++) {
      const node = queue[i]
      if (node) {
        queue.push(node.left)
        queue.push(node.right)
      }
    }
    
    nodes = queue.splice(0, size)
    
    currentDepth++
  }
  
  let j = 0
  
  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i]) {
      nodes[i].left = new TreeNode(val, queue[j])
      nodes[i].right = new TreeNode(val, null, queue[j + 1])
      j += 2
    }
  }
    
  return root
};