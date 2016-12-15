/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let ans = 0;
   
    let hash = {};
    
    function dfs(m){
        let ans = 0;
        if(hash[m]){
            return hash[m];
        }
        
        if(m === 0) {
            ans += 1;
            return ans;
        }
        if(m === -1){
            return ans;
        } 
        
        ans += dfs(m-1);
        ans += dfs(m-2);
        
        
        hash[m] = ans;
        return ans;
    }
    
    return dfs(n);
};
