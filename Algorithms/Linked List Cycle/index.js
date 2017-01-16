/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let i = 0;
    while(head){
        if(head.num >= 0) return true;
        head.num = i;
        i++;
        head = head.next;
    }
    
    return false;
};
