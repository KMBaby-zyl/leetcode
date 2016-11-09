/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
 
    let i = parseInt(str);
    
    if(!i){
        return 0;
    }
    
    if(i>2147483647){
        return 2147483647;
    }
    
    if(i< -2147483648){
        return -2147483648;
    }
    
    return i;
};
