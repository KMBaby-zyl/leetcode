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
var zigzagLevelOrder = function(root) {
    let ans = [];
    
    function find(root, flag){
        if(!root) return;
        
        if(!ans[flag]) ans[flag] = [];
        if(flag%2 === 1){
            ans[flag].unshift(root.val);
        }else{
            ans[flag].push(root.val);
        }
        
        find(root.left, flag + 1);
        find(root.right, flag + 1);
    }
    
    find(root, 0);
    
    return ans;
};
