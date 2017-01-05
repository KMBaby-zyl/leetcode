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
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
     var ans = [];
     
     function dfs(root, sum, arr){
        if(!root) return false;
        
        let newarr = arr.slice(0);
        newarr.push(root.val);
        if(!root.left && !root.right && root.val === sum) {
            ans.push(newarr);
            return;
        }
        
        
        dfs(root.left, sum-root.val, newarr);
        dfs(root.right, sum-root.val, newarr);
    }
    dfs(root, sum, []);
    
    return ans;
};
