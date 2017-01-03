/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    let max = -1;
    
    function find(root, flag){
        if(!root) return;
        
        max = Math.max(max, flag);
        
        find(root.left, flag + 1);
        find(root.right, flag + 1);
    }
    
    find(root, 0);
    
    return max+1;
};
