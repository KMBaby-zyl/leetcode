/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    
    function dfs(root, sum){
        if(!root) return false;
        
        if(!root.left && !root.right && root.val === sum) return true;
        
        if(dfs(root.left, sum-root.val)){
            return true;
        }
        if(dfs(root.right, sum-root.val)){
            return true;
        }
        return false;
    }
    
    return dfs(root, sum);
};
