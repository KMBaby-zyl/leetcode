/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let arr = {};
    function dfs(l, r){
        let ans = 0;
        if(l < r){
            var key = String(l) + String(r);
        }else{
            var key = String(r) + String(l);
        }
        
        if(arr[key]) return arr[key];
        
        if(l === 1){
            return 1;
        }
    
        if(r === 1){
            return 1;
        }
        
        ans = ans + dfs(l-1,r);
        ans = ans + dfs(l,r-1);
        
        arr[key] = ans;arr
        
        return ans;
    }
    
    
    return dfs(m,n);
};
