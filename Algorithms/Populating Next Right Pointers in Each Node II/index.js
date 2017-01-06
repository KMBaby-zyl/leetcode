/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    if(!root) return;
    
    
    while(root){
        let next = null;
        let pre = null;
        
        for (; root; root=root.next) { 
            if(!next) next = root.left ? root.left: root.right;
            
            if(root.left) {
                if(pre) pre.next = root.left;
                pre = root.left;
            }
            
            if(root.right) {
                if(pre) pre.next = root.right;
                pre = root.right
            }
        }
        
        root = next;
    }
};
