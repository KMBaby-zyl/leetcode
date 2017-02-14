/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var getLR = function(str){
    let arr = [];
    let left = false, right = false;
    let val = null;
    for(var i = 0; i<str.length; i++){
        if(str[i] === '{'){
            if(!val) val = str.slice(0,i)
            
            arr.push(i);
        }else if(str[i] === '}'){
            let val = arr.pop();
            if(arr.length === 0){
                if(left === false){
                    left = str.slice(val+1,i);
                }else{
                    right = str.slice(val+1,i);
                }
            }
        }
    }
    
    return {
        val: val,
        l: left,
        r: right
    }
}
/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if(!root) return '';
    
    return root.val + '{' + serialize(root.left) + '}' + '{' + serialize(root.right) + '}'
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if(!data || data.length === '') return null;
    
    let r = new TreeNode();
    let obj = getLR(data);
    r.val = parseInt(obj.val);
    r.left = deserialize(obj.l)
    r.right = deserialize(obj.r)
    
    return r;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
