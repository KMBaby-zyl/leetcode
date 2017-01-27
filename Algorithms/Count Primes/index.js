/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let map = {};
    let ans = 0;
    for(var i = 2; i<n; i++){
        if(!map[i]){
            map[i] = 1;
            ans++;
            
            let j = i *2;
            while(j < n){
                map[j] = 1;
                j = j + i;
            }
        }
    }
    
    return ans;
};
