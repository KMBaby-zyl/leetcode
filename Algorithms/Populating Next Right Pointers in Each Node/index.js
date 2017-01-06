/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    if(!root) return;
    if(root.left) root.left.next = root.right;
    
    connect(root.left);
    connect(root.right);
    
    let node = root.left;
    let node2 = root.right;
    while(node && node.right && node2 && node2.left){
        node.right.next = node2.left;
        node = node.right;
        node2 = node2.left;
    }
    
};
