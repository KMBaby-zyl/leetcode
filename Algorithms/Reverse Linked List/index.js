/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let preHead = new ListNode();
    
    let node = head;
    
    while(node){
        let tem = node;
        node = node.next;
        
        tem.next = preHead.next;
        preHead.next = tem;
        
        
    }
    
    return preHead.next;
    
};
