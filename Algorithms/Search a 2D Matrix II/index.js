/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let m = matrix.length;
    if(m === 0) return false;
    let n = matrix[0].length;
    if(n === 0) return false;
    
    let x = m-1;
    let y = 0;
    
    while(x >=0 && y<n){
        if(matrix[x][y] === target) return true
        else if(matrix[x][y] > target)
            x--;
        else 
            y++
    }
    
    return false;
};
