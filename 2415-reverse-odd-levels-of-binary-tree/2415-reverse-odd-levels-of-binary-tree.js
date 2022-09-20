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
 * @return {TreeNode}
 */
function reverseOddLevels(root) {
  if (!root) return root
  
  let queue = [root]
  let currentLevel = 0
  let nodesByLevel = []
  
  while (queue.length) {
    const size = queue.length
    currentLevel++
    
    let nodesAtCurrentLevel = []
    
    for (let i = 0; i < size; i++) {
      const node = queue[i]
      
      nodesAtCurrentLevel.push(node.val)

      if (node.left) {
        queue.push(node.left)
        queue.push(node.right)
      }
    }
    
    if (currentLevel % 2 == 0) {
      nodesByLevel.push(nodesAtCurrentLevel.reverse())
    } else {
      nodesByLevel.push(nodesAtCurrentLevel)  
    }
    
    queue.splice(0, size)
  }
  
  let traverseTreeRoot = new TreeNode(nodesByLevel[0][0])
  let currentLevelNodes = [traverseTreeRoot]
  let level = 0
  
  while (level < nodesByLevel.length - 1 && currentLevelNodes.length) {
    const size = currentLevelNodes.length
    level++
    let k = 0
    
    for (let i = 0; i < size; i++) {
      const node = currentLevelNodes[i]
      node.left = new TreeNode(nodesByLevel[level][k++])
      node.right = new TreeNode(nodesByLevel[level][k++])
      
      currentLevelNodes.push(node.left)
      currentLevelNodes.push(node.right)
    }
    
    currentLevelNodes.splice(0, size)
  }
  
  return traverseTreeRoot
};