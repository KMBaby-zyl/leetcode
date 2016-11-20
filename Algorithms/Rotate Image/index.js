/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let ans = [];
    let n = matrix.length;
    
    for(var i = 0; i<n; i++){
        ans[i] = [];
    }
    
    for(var i = 0; i< n; i++){
        for(var j=0; j< n; j++){
            ans[j][n - i -1] = matrix[i][j];
        }
    }
    
    for(var i = 0; i< n; i++){
        for(var j=0; j< n; j++){
            matrix[i][j] = ans[i][j];
        }
    }
    
};
