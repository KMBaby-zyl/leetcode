/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let index = 1;
    let map = {};
    while(true){
        if(index === n ){
            return true;
        }else if(index > n){
            break;
        }
        
        index = index * 2;
    }
    
    return false;
};
