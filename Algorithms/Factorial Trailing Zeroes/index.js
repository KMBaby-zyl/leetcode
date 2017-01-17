/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    var  result = 0;
    for(var i=5; ~~(n/i)>0; i*=5){
        result += ~~(n/i);
    }
    return result;
};
