/**
 * @param {number} n
 * @return {number}
 */
var map = {}
var numTrees = function(n) {
    let ans = 0;
    if(n === 1) return 1;
    if(n === 0) return 1;
    
    if(map[n]) return map[n];
    
    for(var i = 1; i<=n; i++){
        ans = ans + numTrees(n-i) * numTrees(i-1);
    }
    
    map[n] = ans;

    return ans;
};
