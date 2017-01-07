/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let ans = 0;
    let buy = prices[0];
    
    for(var i = 1; i<prices.length; i++){
        if(prices[i] > buy){
            ans = Math.max(prices[i]-buy, ans);
        }else{
            buy = prices[i];
        }
    }
    
    return ans;
    
};
