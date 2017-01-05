/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    if(!head) return [];
    function create(head){
        if(!head || head.val === null) return null;
        let fast = head,slow=head;
        
        while(fast.next &&  fast.next.val != null && fast.next.next && fast.next.next.val != null){
            fast = fast.next.next;
            slow = slow.next;
        }
        
        if(!slow.next){
            let root = new TreeNode(slow.val);
            return root;
        }
        
        let root = new TreeNode(slow.val);
        
        root.right = create(slow.next)
        slow.next = null;
        slow.val = null;
        root.left = create(head)
        
        
        return root;
    }
    
    return create(head);
};
