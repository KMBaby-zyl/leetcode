/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let n = matrix.length;
    let m = matrix[0].length;
    
    let arr = [];
    for(var i = 0; i<n; i++){
        for(var j = 0; j<m; j++){
            if(matrix[i][j] === 0){
                arr.push([i,j]);
            }
        }
    }
    
    arr.map(function(pos){
        console.log(pos)
        for(var i =0; i<n; i++){
            matrix[i][pos[1]] = 0;
        }
        
        for(var j =0; j<m; j++){
            matrix[pos[0]][j] = 0;
        }
    })
    
};
