/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let ans = [];
    
    function create(k, n, arr){
        if(k === 1)  {
            if(arr.indexOf(n) === -1 && n > arr[arr.length - 1] && n < 10) {
                arr.push(n);
                ans.push(arr);
            }
           
            return;
        }
        
        if(!arr) arr = [];
        let start = 1;
        if(arr.length > 0){
            start = arr[arr.length - 1] + 1;
        }
        let end = Math.min(9, n-k);
        for(var i = start; i<=end; i++){
            if(arr.indexOf(i) !== -1) continue;
            
            let a = arr.slice(0);
            a.push(i);
            create(k-1, n-i, a);
        }
    }
    
    create(k, n, []);
    
    return ans;
};
