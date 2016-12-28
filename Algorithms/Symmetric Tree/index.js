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
var isSymmetric = function(root) {
    if(!root) return true;
    function rot(root){
        if(!root) return;
        
        rot(root.left);
        rot(root.right)
        let t = root.left;
        root.left = root.right;
        root.right = t;
    }
    
    rot(root.left);
    
    var isSameTree = function(p, q) {
        let ans = true;
        if(!p && !q) return true;
        
        if(!p || !q) return false;
        
        if(p.val != q.val){
            return false;
        }
        
        if(!isSameTree(p.left, q.left)){
            return false;
        }
        if(!isSameTree(p.right, q.right)){
            return false;
        }
        
        return ans;
        
    };
    
    return isSameTree(root.left, root.right);
};
