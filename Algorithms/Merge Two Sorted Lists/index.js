/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let val = 0;
    let first = null;
    let node = null;
    
    if(l1 && l2){
        if(l1.val > l2.val){
            first = l2;
            node = first;
            l2 = l2.next;
        }else{
            first = l1;
            node = first;
            l1 = l1.next;
        }
    }else{
        if(l1){
           first = l1;
            node = first;
            l1 = l1.next; 
        }
        
        if(l2){
            first = l2;
            node = first;
            l2 = l2.next;
        }
    }
    
    
    while(l1 && l2){
        if(l1.val > l2.val){
            node.next = l2;
            node = node.next;
            l2 = l2.next;
        }else{
            node.next = l1;
            node = node.next;
            l1 = l1.next;
        }
    }
    
    while(l1){
        node.next = l1;
        node = node.next;
        l1 = l1.next;
    }
    
    while(l2){
        node.next = l2;
        node = node.next;
        l2 = l2.next;
    }
    
    return first;
    
    
    
    
};
