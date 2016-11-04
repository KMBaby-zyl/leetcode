/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    var r = x;
    if(n === 0){
        return 1;
    }
    if(n === 1){
        return x;
    }
    if( n < 0 ){
        return myPow((1/x),Math.abs(n))
    }
    var i = 2;
    while (i <= n){
        r = r * r;
        i = i * 2;
    }
    
    i = parseInt(i/2);
    
    if( i === n){
        return r;
    }else{
        return (r * myPow(x,n-i))
    }
    
};
