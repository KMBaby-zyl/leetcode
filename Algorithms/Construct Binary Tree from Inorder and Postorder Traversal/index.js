/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if(postorder.length === 0) return [];
    
    function create(ps, pe, is, ie){
        if(pe === ps) return null;
        let val = postorder[pe-1];
        let root = new TreeNode(val);
        let index = inorder.indexOf(val);
        
        let llen = index-is;
        let rlen = ie - index -1;
        
        root.left = create(ps, ps+llen, is, index);
        root.right = create(ps+llen, pe-1, index+1, ie);
        
        return root;
    }
    
    
    return create(0, postorder.length, 0, inorder.length)
};
