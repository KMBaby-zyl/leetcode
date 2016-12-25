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
    
    map[pre.val] = 1;
    
    while(node){
        if(map[node.val] === undefined){
            map[node.val] = 1;
            pre = node;
            node = node.next;
            
        }else{
            node = node.next;
            pre.next = node;
        }
    }
    
    return head;
};
