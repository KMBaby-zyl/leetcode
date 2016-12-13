/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    if(n === 1) return "1";
    let ans = "";
    let all = 1;
    
    let tarr = [];
    for(var i = 1; i<=n; i++){
        all = all * i;
        tarr.push(i);
    }
    
    let c = n;
    k = k -1;
    
    while(ans.length < n){
        all = all / c;
        c--;
        
        let m = ~~(k / all);
        k = k % all;
        let val = tarr.splice(m,1);
        ans = ans + val;
    }
    
    return ans;
};
