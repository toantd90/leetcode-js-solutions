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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return []
  let queue = [root]
  let ans = []
  
  while (queue.length) {
    const size = queue.length
    ans.push([])
    
    for (let i = 0; i < size; i++) {
      const node = queue[i]
      ans[ans.length - 1].push(node.val)
      
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    
    queue.splice(0, size);
  }

  return ans
};