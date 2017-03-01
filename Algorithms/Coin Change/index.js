/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let INF = 999999;
    let dp = [];
    for(var i = 1; i<=amount; i++){
        dp[i] = INF;
    }
    
    dp[0] = 0;
    
    for(var i = 1; i<=amount; i++){
        for(var j = 0; j<coins.length; j++){
            if((i-coins[j]) < 0 ) continue;
            dp[i] = Math.min(dp[i-coins[j]] + 1,dp[i]);
        }
    }
    
    return dp[amount] === INF ? -1 : dp[amount];
};
