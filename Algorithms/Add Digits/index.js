/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if(num < 10) return num;
    let ans = 0;
    while(num >= 10){
        ans = ans + num % 10;
        num = ~~(num/10);
    }
    
    ans = ans + num;
    
    return addDigits(ans);
};
