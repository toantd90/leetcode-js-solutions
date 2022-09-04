/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function dfs(node, col, cols, row, nodeMap) {
  if (!node) return
  if (!nodeMap[col]) {
    nodeMap[col] = []
    cols.push(col)
  }
  
  if (!nodeMap[col][row]) {
    nodeMap[col][row] = []
  }
  
  nodeMap[col][row].push(node.val)
  
  dfs(node.left, col - 1, cols, row + 1,nodeMap)
  dfs(node.right, col + 1, cols, row + 1, nodeMap)
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function verticalTraversal(root) {
  let nodeMap = {}
  let cols = []

  dfs(root, 0, cols, 0, nodeMap)
  
  cols.sort((c1, c2) => c1 - c2)
  
  let res = []
  
  for (let col of cols) {
    let cur = []
    for (let nodes of nodeMap[col]) {
      if (nodes && nodes.length > 0) {
        cur.push(...nodes.sort((v1, v2) => v1 - v2))
      }
    }
    res.push(cur)
  }
  
  return res
};