/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if(nums.length === 0) return [];
    function create(left, right){
        if(left === right) return null;
        let m = ~~((right + left)/2);
        let root = new TreeNode(nums[m]);
        root.left = create(left, m)
        root.right = create(m+1, right)
        
        return root;
    }
    
    return create(0, nums.length);
};
