/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let ans = 0;
    while(n > 0){
        let i = n%2;
        if(i === 1) ans++;
        
        n = ~~(n/2)
    }
    
    return ans
};
