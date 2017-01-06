/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    
    if(s.length === 0){
        return 0;
    }
    
    let dp = [];
    dp[0] = [1];
    
    let m = s.length;
    let n = t.length;
    
    for(var i = 1; i<=m; i++){
        dp[i] = [1];
    }
    for(var i = 1; i<=n; i++){
        dp[0].push(0);
    }
    
    
    for(var i = 1; i<=m; i++){
        for(var j = 1; j<=n; j++){
            if(s[i-1] === t[j-1]){
                dp[i][j] = dp[i-1][j-1] + dp[i-1][j];
            }else{
                dp[i][j] = dp[i-1][j];
            }
        }
    }
    
    return dp[m][n]
};
