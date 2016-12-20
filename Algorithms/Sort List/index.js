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
var sortList = function(head) {
    
    function sort(head){
        let node = head;
        let last; 
        if(head === null || head.next === null) return head;
        
        let fast = head;
        let slow = head;
        
        if(head.next === null) return head;
        
        if(head.next.next === null){
            if(head.val > head.next.val){
                let t = head.val;
                head.val = head.next.val;
                head.next.val = t;
            }
            
            return head;
        }
        
        while(fast && fast.next !== null){
            fast = fast.next.next;
            slow = slow.next;
        }
        
        fast = slow;
        slow = slow.next;
        fast.next = null;
        
        let node1 = sort(head);
        let node2 = sort(slow);
        return merge(node1, node2);
    }
    
    function merge(node1, node2){
        let head = null;
        
        
        if(node1.val < node2.val){
            head = new ListNode(node1.val);
            node1 = node1.next;
        }else{
            head = new ListNode(node2.val);
            node2 = node2.next;
        }
        
        let node = head;
        
        while(node1 || node2){
            if(node1 === null){
                 node.next = node2;
                node = node.next;
                node2 = node2.next;
            }else if(node2 === null){
                node.next = node1;
                 node = node.next;
                 node1 = node1.next;
            }else if(node1.val < node2.val){
                 node.next = node1;
                 node = node.next;
                 node1 = node1.next;
            }else{
                node.next = node2;
                node = node.next;
                node2 = node2.next;
            }
        }
        
        return head;
    }
    
    return sort(head);
};
