/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function(head) {
    if(!head) return head;
    
    var node = head;
    while(node){
        let tmp = node.next;
        node.next = new RandomListNode(node.label);
        node.next.next = tmp;
        node = tmp;
    }
    
    let old = head;
    let ans = head.next;
    let newN = head.next;
    while(old){
        newN.random = old.random && old.random.next;
        old = old.next.next;
        newN = newN.next && newN.next.next;
    }
    
    old = head;
    newN = head.next;
    while(old){
        
        old.next = old.next.next;
        old = old.next;
        newN.next = old && old.next;
        newN = newN.next;
    }
    
    return ans;
};
