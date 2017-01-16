/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let fast = head, 
        slow = head;
    
    if(!head) return ;
        
    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;
    }
    
    let nodef = slow.next;
    slow.next = null;
     
    // 逆序
    let node = nodef;
    let pre = null;
    let tmp = null;
    while(node){
        tmp = node;
        node = node.next;
        tmp.next = pre;
        pre = tmp;
    }
    
    nodef = tmp;
    
    node = head;
    let node2 = nodef;
    
    while(node && node2){
        let tmp = node2;
        node2 = node2.next;
        
        tmp.next = node.next;
        node.next = tmp;
        node = node.next.next;
    }
    
};
