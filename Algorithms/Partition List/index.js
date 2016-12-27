/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    
    let pre = head;
    if(!pre)  return head;
    let flag = true;
    
    let first = pre = new ListNode(-1);
    pre.next = head;
    
    while(pre.next && flag){
        if(pre.next.val >= x){
            flag = false;
        }else{
            pre = pre.next;
        }
        
    }
    if(flag){
        return head;
    }
    find();
    return first.next;
    
    function find(){
        let node = pre;
        let next = node.next;
        while(next){
            if(next.val < x){
                let t = next.next;
                next.next = pre.next;
                pre.next = next;
                next = t;
                node.next = t;
                pre = pre.next;
            }else{
                node = next;
                next = next.next;
            }
        }
    }
};
