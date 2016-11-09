/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let s = '' + x;
    let len = s.length;
    let limit = Math.ceil(len/2);
    
    for(var i = 0; i<limit; i++){
        if(s[i] != s[len-1 - i]){
            return false;
        }
    }
    
    return true;
};
