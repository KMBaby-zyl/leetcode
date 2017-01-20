/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @constructor
 * @param {TreeNode} root - root of the binary search tree
 */
var BSTIterator = function(root) {
    this.root = root;
    this.stack = [];
    let self = this;
    
    
    var create = function(root){
        let node = root;
        let stack = self.stack;
        while(node){
            stack.push(node);
            node = node.left;
        }
    }
    
    create(root);
    this.create = create;
};


/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function() {
    return this.stack.length > 0;
};  

/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function() {
    let ans = this.stack.pop()
    
    if(ans.right){
        this.create(ans.right);
    }
    
    return ans.val
};

/**
 * Your BSTIterator will be called like this:
 * var i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
*/
