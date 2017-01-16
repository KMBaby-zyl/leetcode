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
var detectCycle = function(head) {
    let i = 0;
    while(head){
        if(head.num >= 0) return head;
        head.num = i;
        i++;
        head = head.next;
    }
    
    return null;
};
