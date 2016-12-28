/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let ans = [];
    if(root){
         getNum(root);
         return ans;
    }else{
        return [];
    }
    function getNum(root){
        if(!root) return;
        
        getNum(root.left);
        ans.push(root.val);
        getNum(root.right)
        
    }
};
