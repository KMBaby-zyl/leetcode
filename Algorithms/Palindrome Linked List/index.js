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
var isPalindrome = function(head) {
    if(!head || !head.next) return true;
    let slow = head;
    let fast = head;
    while(fast && fast.next && fast.next.next){
        fast = fast.next.next;
        slow = slow.next;
    }
    
    let head2 = slow.next;
    
    slow.next = null;
    
    let pre = null;
    while(head2){
        let t = head2;
        head2 = head2.next;
        t.next = pre;
        pre = t;
    }
    
    head2 = pre;
    while(head && head2){
        if(head.val === head2.val){
            head = head.next;
            head2 = head2.next;
        }else{
            return false;
        }
    }
    
    return true;
    
    
};
