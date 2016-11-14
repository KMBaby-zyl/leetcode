/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let arr = [];
    if(lists.length === 0) return arr;
    
    lists.map(function(node){
        if(node){
            while(node.next){
                arr.push(node.val);
                node = node.next;
            }
            arr.push(node.val);
        }
    });
    
    arr.sort(function(a,b){
        return a-b;
    });
    
    if(arr[0] === undefined){
        return [];
    }
    
    
    let first = new ListNode(arr[0]);
    let node = first;
    let len = arr.length;
    for(var i = 1; i < len; i++){
        node.next = new ListNode(arr[i]);
        node = node.next;
    };
    
    return first;
};
