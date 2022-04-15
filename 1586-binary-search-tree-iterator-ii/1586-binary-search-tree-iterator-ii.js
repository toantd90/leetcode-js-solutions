const inOrderTraverse = (node, traverseOrder = []) => {
    if (!node) return
    if (node.left) inOrderTraverse(node.left, traverseOrder)
    traverseOrder.push(node.val)
    if (node.right) inOrderTraverse(node.right, traverseOrder)
    
    return traverseOrder
}

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
    this.traverseOrder = inOrderTraverse(root)
    this.currentIndex = -1
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.currentIndex + 1 < this.traverseOrder.length
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    this.currentIndex = this.currentIndex + 1
    return this.traverseOrder[this.currentIndex]
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasPrev = function() {
     return this.currentIndex - 1 > -1
};

/**
 * @return {number}
 */
BSTIterator.prototype.prev = function() {
    this.currentIndex = this.currentIndex - 1
    return this.traverseOrder[this.currentIndex]
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.hasNext()
 * var param_2 = obj.next()
 * var param_3 = obj.hasPrev()
 * var param_4 = obj.prev()
 */