/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let arr = [1];
    let p2 = 0, p3 = 0, p5 = 0;
    
    for(var i = 1; i<n; i++){
        last = arr.slice(-1)[0];
        
        while(arr[p2]*2 <= last) p2++;
        while(arr[p3]*3 <= last) p3++;
        while(arr[p5]*5 <= last) p5++;
        
        arr.push(Math.min(arr[p2]*2, arr[p3]*3, arr[p5]*5))
    }
    
    return arr[n-1]
};
