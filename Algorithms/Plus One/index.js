/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let i = digits.length - 1;
    
    for( ; i>=0; i--){
         let t = digits[i] + 1;
         if(t === 10){
            digits[i] = 0
         }else{
             digits[i] = t;
             return digits;
         }
    }
    
    digits.unshift(1);
    return digits;
};
