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
var minDepth = function(root) {
    if(!root) return 0;
    
    if(!root.left){
        return 1 + minDepth(root.right)
    }
    if(!root.right){
        return 1 + minDepth(root.left)
    }
    
    let ans = 1 + Math.min(minDepth(root.right), minDepth(root.left))
    return ans;
};
