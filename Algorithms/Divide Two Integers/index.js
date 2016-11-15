/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    var val = parseInt(dividend/divisor)
    
    if(val === 2147483648) val = 2147483647;
    return val;
};
