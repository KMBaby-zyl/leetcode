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
var swapPairs = function(head) {
    let first,node=head;
    if(head && head.next) first = head.next;
    else return head;
    
    let pre;
    while(node && node.next){
        let tmp = node.next;
        node.next = tmp.next;
        tmp.next = node;
        if(pre) pre.next = tmp;
        pre = node;
        node = node.next;
    }
    
    return first;
};
