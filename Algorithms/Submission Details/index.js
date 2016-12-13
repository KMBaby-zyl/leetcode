/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(k === 0) return head;
    
    if(!head) return head;
    
    let node = head;
    let len = 1;
    while (node.next){
        len++;
        node = node.next;
    }
    k = k % len;
    let t = len - k;
    
    if(k === 0) return head;
    let last = head;
    while(t > 1){
        last = last.next;
        t--;
    }
    node = last.next;
    let nhead = node;
    last.next = null;
    
    while(node.next){
        node = node.next;
    }
    
    node.next = head;
    
    
    return nhead;
};
