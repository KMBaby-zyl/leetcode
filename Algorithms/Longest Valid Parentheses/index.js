/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let arr = [];
    let anss = [];
    
    s.split('').map(function(i){
        if(i === '('){
            arr.push(1);
        }else{
            
            for(var j = arr.length-1; j>=0; j--){
                if(arr[j] === 1) {
                    arr[j] = 2;
                    j = -2;
                }
            }
            
            if(j === -1){
                arr.push(-1);
            }
        }
    });
    
    let ans = 0;
    let length = 0;
    
    // console.log(arr);
    arr.map(function(i){
       if(i === 2){
           length = length + 2;
       }else{
           ans = Math.max(length, ans);
           length = 0;
       }
    });
    
    ans = Math.max(length, ans);
    
    return ans;
};
