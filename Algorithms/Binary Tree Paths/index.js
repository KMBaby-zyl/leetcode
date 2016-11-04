/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if(!root){
        return [];
    }
    var arr = [],
        s = '' + root.val;
    
    if(root.left){
        var arrl = binaryTreePaths(root.left);
        for(var i = 0,len = arrl.length; i<len; i++){
            arr.push(s + '->' + arrl[i]);
        }
        
    }
    if(root.right){
        var arrr = binaryTreePaths(root.right);
        for(var i = 0,len = arrr.length; i<len; i++){
            arr.push(s + '->' + arrr[i]);
        }
    }
    if(!root.right && !root.left){
        arr.push(s);
    }
    
    return arr;
};
