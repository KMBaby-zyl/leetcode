/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    let i = 1;
    let left, right;
    
    let node = head;
    let arr = [];
    let preHead = new ListNode();
    preHead.next = head;
    let prenode = preHead;
    left = prenode.next;
    if( m >= n){
        return head;
    }
    
    while(node){
        if(i === n){
            left.next = node.next;
            let tem = node;
            tem.next = prenode.next
            prenode.next = tem;
            node = null;
            
        }else if(i > m){
            let tem = node;
            node = node.next;
            tem.next = prenode.next
            prenode.next = tem;
        }else{
            if((i+1) === m){
                prenode = node;
                left = node.next;
            }
            node = node.next;
        }
        
        i++;
        
    }
    console.log(preHead)
    
    return preHead.next;
    
};
