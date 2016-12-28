/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    let sarr = [];
    for(var i = 1; i<=n; i++){
        sarr.push(i)
    }
    
    let map = {};
    if(n === 0) return [];
    
    function cTrees(arr){
        let ans = [];
        
        if(arr.length === 1) return [new TreeNode(arr[0])];
        if(arr.length === 0) return [null];
        
        let key = arr.join('.');
        if(map[key]) return map[key];
        
        for(var i = 0; i<arr.length; i++){
            let lefts = cTrees(arr.slice(0,i));
            let rights = cTrees(arr.slice(i+1)); 
            
            lefts.map(function(lt){
                rights.map(function(rt){
                    let t = new TreeNode(arr[i]);
                    t.left = lt;
                    t.right = rt;
                    
                    ans.push(t);
                });
            });
            
        }
        
        map[key] = ans;
    
        return ans;
    }
    
    return cTrees(sarr);
};
