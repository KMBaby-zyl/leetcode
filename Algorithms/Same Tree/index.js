/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
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
