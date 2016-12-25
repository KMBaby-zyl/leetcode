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
var deleteDuplicates = function(head) {
    let map ={};
    let pre = head;
    if(pre && pre.next) node = pre.next;
    else return head;
    
    map[pre.val] = head;
    
    while(node){
        if(map[node.val] === undefined){
            map[node.val] = node;
            pre = node;
            node = node.next;
        }else{
             map[node.val].del = true;
            node = node.next;
            pre.next = node;
        }
    }
    
    while(head && head.del){
        head = head.next;
    }
    
    pre = head;
    node = pre && pre.next;
    
     while(node){
        if(node.del){
            node = node.next;
            pre.next = node;
        }else{
            pre = node;
            node = node.next;
        }
    }
    
    
    return head;
};
