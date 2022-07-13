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
    let curLevel = []
    
    for (let i = 0; i < size; i++) {
      const node = queue.shift()
      curLevel.push(node.val)
      
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    
    ans.push(curLevel)
  }

  return ans
};