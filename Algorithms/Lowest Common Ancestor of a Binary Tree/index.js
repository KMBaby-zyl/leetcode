/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(!root) return 'null';
    let ifroot = false;
    if(root === p || root === q){
        ifroot = true;
    }
    
    if(ifroot){
        return root.val;
    }
    
    let left = lowestCommonAncestor(root.left,p,q);
    let right = lowestCommonAncestor(root.right,p,q);
    
    
    
    if(left !== 'null' && right !== 'null'){
        return root.val;
    }else if(left !== 'null'){
        return left;
    }else{
        return right;
    }
    
};


