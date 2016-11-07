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
var addTwoNumbers = function(l1, l2) {
    let b = 0;
    let first,pre;
    
        first = new ListNode(getV(l1.val, l2.val));
        pre = first;
    
    while(l1.next && l2.next){
        l1 = l1.next;
        l2 = l2.next;
        pre.next = new ListNode(getV(l1.val, l2.val));
        pre = pre.next;
    }
    
    let l;
    if(l1.next === null) l = l2;
    if(l2.next === null) l = l1;
    
    if(l.next === null) {
        if(b === 1){
            pre.next = new ListNode(1);
        }
        return first;
    }
    
    while(l.next){
        l = l.next;
        pre.next =  new ListNode(getV(l.val, 0));
        pre = pre.next;
    }
    
    if(b === 1){
        pre.next = new ListNode(1);
    }
    
    return first;
    
    
    function getV(v1,v2){
        let v = v1 + v2 + b;
        if(v >= 10){
            b = 1;
            v = v -10;
        }else{
            b = 0;
        }
        
        return v;
    }
};

