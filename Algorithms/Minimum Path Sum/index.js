/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let arr = {};
    let m = grid.length -1;
    let n = grid[0].length -1;
    
    function dfs(l, r){
        let sum = 0;
        // if(l < r){
            var key = String(l) + ':' + String(r);
        // }
        
        if(arr[key]) return arr[key];
        
        if(l === 0){
            for(var i = 0; i<=r ; i++){
                sum = sum + grid[0][i];
            }
            return sum;
        }
    
        if(r === 0){
            for(var i = 0; i<=l ; i++){
                sum = sum + grid[i][0];
            }
            return sum;
        }
        
        sum = grid[l][r] + Math.min(dfs(l-1,r), dfs(l,r-1));
        
        arr[key] = sum;
        
        return sum;
    }
    
    return dfs(m, n);
    
    
};
