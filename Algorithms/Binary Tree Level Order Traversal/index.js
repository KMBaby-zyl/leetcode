/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let ans = [];
    
    function search(root, n){
        if(!root) return;
        if(!ans[n]) ans[n] = [];
        ans[n].push(root.val);
        
        search(root.left, n+1);
        search(root.right, n+1);
    }
    
    search(root, 0);
    
    return ans;
};
