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
var isValidBST = function(root) {
    if(!root) return true;
    let rootval = root.val;
    
    function check(root, min, max){
        
        if(root.left){
            if(root.left.val >= root.val){
                return false;
            }
            
            if(min && root.left.val <= min){
                return false;
            }
            
            if(!check(root.left, min, max||root.val)){
                return false;
            }
        }
        
        if(root.right){
            if(root.right.val <= root.val){
                return false;
            }
            
            if(max && root.right.val >= max){
                return false;
            }
            
            if(!check(root.right, min||root.val, max)){
                return false;
            }
        }
        return true;
    }
    
    return check(root);
};
