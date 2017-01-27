/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let ans = head;
    if(!head) return head;
    
    while(ans && ans.val === val){
        ans = ans.next;
    }
    
    let pre, node = ans;
    
    while(node){
        if(node.val === val) {
            pre.next = node.next;
            node = node.next;
        }else{
            pre = node;
            node = node.next;
        }
    }
    return ans;
    
};
