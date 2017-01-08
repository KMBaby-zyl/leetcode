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
var maxPathSum = function(root) {
    let max = -999999;
    var findMax = function(root){
        if(!root){
            return 0;
        }else if(!root.left && !root.right){
            max = Math.max(max, root.val);
            return root.val;
        }else if(root.left || root.right){
            let m1 = findMax(root.left);
            let m2 = findMax(root.right);
            max = Math.max(max, (m1 > 0 ? m1 : 0) + root.val + (m2 > 0? m2 : 0));
            return root.val + Math.max((m1 > 0 ? m1 : 0), m2);
        }
    };
    let m = findMax(root);
    max = Math.max(max, m);
    
    return max;
};


