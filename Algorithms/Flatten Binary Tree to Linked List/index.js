/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
   
    
    function search(root){
        if(!root) return;
        if(!root.left && !root.right) return;
        if(root.left) search(root.left);
        if(root.right) search(root.right);
        let tem = root.right;
        root.right = root.left;
        root.left = null;
        while(root.right){
            root = root.right;
        }
        root.right = tem;
    }
    
    search(root);
};
