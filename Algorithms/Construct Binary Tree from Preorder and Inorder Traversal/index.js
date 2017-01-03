/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(preorder.length === 0) return [];
    
    function create(ps, pe, is, ie){
        if(pe === ps) return null;
        let val = preorder[ps];
        let root = new TreeNode(val);
        let index = inorder.indexOf(val);
        
        let llen = index-is;
        let rlen = ie - index -1;
        
        root.left = create(ps+1, ps+1+llen, is, index);
        root.right = create(ps+1+llen, pe, index+1, ie);
        
        return root;
    }
    
    
    return create(0, preorder.length, 0, inorder.length)
    
    
};
