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
var postorderTraversal = function(root) {
    let arr = [];
    
    function search(root){
        if(root){
            
            
            if(root.left){
                search(root.left)
            }
            if(root.right){
                search(root.right);
            }
            
            arr.push(root.val);
        }
    }
    
    search(root);
    
    return arr;
};
