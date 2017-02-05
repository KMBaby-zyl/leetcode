/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    let ans = [];
    
    if(!root) return ans;
    
    let arr = [root];
    
    while(arr.length > 0){
        ans.push(arr[arr.length-1].val);
        
        let tarr = [];
        for(var i = 0; i<arr.length; i++){
            if(arr[i].left) tarr.push(arr[i].left);
            if(arr[i].right) tarr.push(arr[i].right);
        }
        
        arr = tarr;
    }
    
    return ans;
    
};
