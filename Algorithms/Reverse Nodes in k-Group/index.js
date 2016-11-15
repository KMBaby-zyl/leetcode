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
var reverseKGroup = function(head, k) {
    let first;
    if(k === 1) return head;
    
    if(!head) return null;
    first = head;
    
    let pre;
    
    let tnode = head;
    while(true){
        let tarr = [];
        for(var i=0; i< k; i++){
            // console.log(tnode);
            if(!tnode) {
                return first;
            }
            tarr.push(tnode);
            tnode = tnode.next;
        }
        for(var i=0; i<k; i++){
            let temp = tarr.pop();
            if(pre){
                pre.next = temp;
            }else{
                first = temp;
            }
            pre = temp;
        }
        pre.next = tnode;
    }
    
    return first;
};




