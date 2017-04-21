/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
    if(n === 0) return 1;
    if(n === 1) return 10;
    
    var ans = 10;
    var t = 9;
    var nums = 9;
    while(n > 1){
        t = t * nums;
        ans = ans + t;
        nums--;
        n--;
    }
    
    return ans;
};
