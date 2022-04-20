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
 */
var BSTIterator = function(root) {
    this.nodes = []
    this.currentIndex = -1
    this.inorderTraverse(root)
};

BSTIterator.prototype.inorderTraverse = function(node) {
    if (!node) return
    this.inorderTraverse(node.left)
    this.nodes.push(node.val)
    this.inorderTraverse(node.right)
}

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    return this.nodes[++this.currentIndex]
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.nodes[this.currentIndex + 1] !== undefined
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */