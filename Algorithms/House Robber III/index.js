/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function(root) {
    if(!root) return 0;
    if(root.rob) return root.rob;
    
    let a = root.val;
    if(root.left){
        a = a + rob(root.left.left) + rob(root.left.right)
    }
    if(root.right){
        a = a + rob(root.right.left) + rob(root.right.right)
    }
    let b = rob(root.left) + rob(root.right);
    
    root.rob = Math.max(a,b);
    return Math.max(a,b);
};
