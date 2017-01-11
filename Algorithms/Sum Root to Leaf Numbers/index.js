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
var sumNumbers = function(root) {
    let ansA = [];
    function dfs(root, arr){
        arr = arr.slice(0);
        arr.push(root.val);
        
        if(root.left){
            dfs(root.left, arr);
        }
        
        if(root.right){
            dfs(root.right, arr);
        }
        
        if(!root.right && !root.left){
            ansA.push(arr);
        }
    }
    
    if(!root) return 0;
    
    dfs(root, []);
    let ans = 0;
    ansA.map(function(item){
        let s = ~~item.join('');
        ans = ans + s;
    })
    
    return ans;
    
};
