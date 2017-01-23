/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let s = n.toString(2);
    s = s.split('');
    while(s.length < 32){
        s.unshift(0);
    }
    s.reverse();
    
    let k = 1;
    let ans = 0;
    for(var i = s.length - 1; i >= 0; i--){
        if(s[i] == 1) ans = ans + k;
        
        k = k * 2;
    }
    
    return ans;
};
