/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(matrix.length === 0 || matrix[0].length === 0) return false;
    let m = matrix.length;
    let n = matrix[0].length;
    
    if(target < matrix[0][0]) return false;
    
    for(var i = 1; i<m; i++){
        if(target < matrix[i][0]){
            let arr = matrix[i-1];
            for(var j = 0; j<n; j++){
                if(arr[j] === target){
                    return true;
                }
            }
            
            return false;
        }
    }
    
    // 如果在最后一列
    let l = m - 1;
    for(var j = 0; j<n; j++){
       if(matrix[l][j] === target){
            return true;
        }     
    }
    
    return false;
};
