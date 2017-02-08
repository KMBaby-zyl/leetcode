/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let all = 0;
    let ans;
    
    function search(root){
        if(root){
            if(root.left) search(root.left);
            all++
            if(all === k){
                ans = root.val;
                return;
            }
            if(root.right) search(root.right);
        }
    }
    
    search(root);
    
    return ans;
};
