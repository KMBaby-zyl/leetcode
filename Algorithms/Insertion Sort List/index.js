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
var insertionSortList = function(head) {
    if(!head) return head;
    if(!head.next) return head;
    
    let node = head;
    let cur = new ListNode(node.val);
    let ans = cur;
    node = node.next;
    
    // if(node.val < cur.val){
    //     pre = node;
    //     pre.next = cur;
    // }else{
    //     pre = cur;
    //     cur = node;
    //     pre.next = cur;
    // }
    // node = node.next;
    
    while(node){
        let p = ans;
        
        if(node.val < ans.val){
            let t = new ListNode(node.val);
            t.next = ans;
            ans = t;
             node = node.next;
            continue;
        }
        
        c = ans.next;
        
        let flag = true;
        
        while(flag){
            if(c === null){
                p.next = new ListNode(node.val);
                 flag = false;
            }else if(node.val < c.val){
                let t = new ListNode(node.val);
                p.next = t;
                t.next = c;
                flag = false;
            }else{
                p = p.next;
                c = c.next;
            }
        }
        
        node = node.next;
    }
    
    return ans;
    
};
