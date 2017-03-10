/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    let i = 1;
    while(i <= n){
        if(i === n) return true;
        
        i = i *3;
    }
    
    return false;
};
