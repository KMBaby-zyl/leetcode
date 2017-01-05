/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
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

var isBalanced = function(root) {
    if(!root) return true;
    let ans = true;
    if(Math.abs(maxDepth(root.left) - maxDepth(root.right))>1){
        return false;
    }
    
    return ans && isBalanced(root.left) && isBalanced(root.right)
};
