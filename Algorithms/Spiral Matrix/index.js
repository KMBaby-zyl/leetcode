/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix, start) {
    let ans = [];
    let s = start || 0;
    
    if(!matrix[0]) return [];
    
    let xlen = matrix.length - s;
    let ylen = matrix[0].length - s;
    let xMlen = matrix.length - 2 * s;
    let yMlen = matrix[0].length - 2 * s;
    
    
    if(xMlen <= 0 || yMlen <= 0) return [];
    
    let x = s;
    let y = s;
    
    if(xMlen === 1) {
        for( ; y < ylen; y++){
            ans.push(matrix[x][y]);
        }
        
        return ans;
    }
    
    if(yMlen === 1) {
        for( ; x < xlen; x++){
            ans.push(matrix[x][y]);
        }
        
        return ans;
    }
    
    for( ; y < (ylen - 1); y++){
        ans.push(matrix[x][y]);
    }
    
    for( ; x < (xlen - 1); x++){
        ans.push(matrix[x][y]);
    }
    
    for( ; y > s; y--){
        ans.push(matrix[x][y]);
    }
    
    for( ; x > s; x--){
        ans.push(matrix[x][y]);
    }
    
    
    
    ans = ans.concat(spiralOrder(matrix, s+1));
    
    
    return ans;
    
};
