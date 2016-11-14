/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let target = head;
    let node = head;
    let sn = n;
    let len = 1;
    
    if(head.next === null){
        return null;    
    }
    
    while(node.next){
        if(sn >= 1) sn --;
        else if(sn === 0){
            target = target.next;
        }
     
        len++;
        node = node.next;
    }

    if(len === n){
        target = target.next;
        
        return target;
    }
    
    if(n === 1){
        target.next = null;
    }else{
        target.next = target.next.next;
    }
    
    
    
    
    return head;
    
};
