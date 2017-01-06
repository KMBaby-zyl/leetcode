/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let ans = [];
    let numRows = rowIndex + 1;
    for(var i = 0; i< numRows; i++){
        ans[i] = [];
    }
    for(var i = 1; i<=numRows; i++){
        for(var j = 0; j<i; j++){
            if(j===0 || j=== (i-1)){
                ans[i-1].push(1);
            }else{
                ans[i-1].push(ans[i-2][j-1] + ans[i-2][j])
            }
        }
    }
    
    
    return ans[rowIndex];
};
