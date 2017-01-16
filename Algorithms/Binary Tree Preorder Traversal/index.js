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
 
var preorderTraversal = function(root) {
    let arr = [];
    
    function search(root){
        if(root){
            arr.push(root.val);
            
            if(root.left){
                search(root.left)
            }
            if(root.right){
                search(root.right);
            }
        }
    }
    
    search(root);
    
    return arr;
};
