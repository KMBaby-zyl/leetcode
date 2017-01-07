/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let arr = [];
    let buy = 0;
    
    
    for(var i = 1; i<prices.length; i++){
        if(prices[i] > prices[buy]){
            arr.push([prices[buy], prices[i]]);
            buy = i;
        }else{
            buy = i;
        }
    }
    
    let ans = 0;
    
    console.log(arr);
    let fb = 100000;
    let sb = 100000;
    let fm = 0, sm = 0;
    let max = 0;
    
    if(arr.length <= 2){
        for(var i = 0; i<arr.length; i++){
            ans += arr[i][1] - arr[i][0]
        }
    }else{
        for(var i = 0; i<arr.length; i++){
            fb = Math.min(fb, arr[i][0]);
            fm = arr[i][1] - fb;
            sb = 1000000;
            sm = 0;
            
            for(var j = i+1; j<arr.length; j++){
                sb = Math.min(sb, arr[j][0]);
                sm = Math.max(sm, arr[j][1] - sb);
                
                max = Math.max(fm+sm, max);
            }
        }
        
        
        return max
    }
    
    
    return ans;
};
