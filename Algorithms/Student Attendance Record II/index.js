/**
 * @param {number} n
 * @return {number}
 */
var checkRecord = function(n) {
    var dp = [[1,1,0],[1,0,0]];
    var MOD = 1000000007;
    for(var i = 2; i<=n; i++){
        var ndp = [[],[]];
        
        ndp[0][0] = (dp[0][0] + dp[0][1] + dp[0][2]) % MOD; 
        ndp[0][1] = dp[0][0];
        ndp[0][2] = dp[0][1];
        ndp[1][0] = (dp[0][0] + dp[0][1] + dp[0][2] + dp[1][0] + dp[1][1] + dp[1][2]) % MOD;
        ndp[1][1] = dp[1][0];
        ndp[1][2] = dp[1][1];
        
        dp = ndp;
    }
    
    return (dp[0][0] + dp[0][1] + dp[0][2] + dp[1][0] + dp[1][1] + dp[1][2])  % MOD;
};
