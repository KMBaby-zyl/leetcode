/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length - 1;
    let n = obstacleGrid[0].length - 1;
    
    let arr = {};
    function dfs(l, r){
        let ans = 0;
        // if(l < r){
            var key = String(l) + ':' + String(r);
        // }else{
        //     var key = String(r) + String(l);
        // }
        
        if(arr[key]) return arr[key];
        
        if(l === 0){
            for(var i = 0; i<=r; i++){
                if(obstacleGrid[0][i] === 1) return 0;
            }
            return 1;
        }
    
        if(r === 0){
            for(var i = 0; i<=l; i++){
                if(obstacleGrid[i][0] === 1) return 0;
            }
            return 1;
        }
        
        
        if(obstacleGrid[l-1][r] === 0)
        ans = ans + dfs(l-1,r);
        
        if(obstacleGrid[l][r-1] === 0)
        ans = ans + dfs(l,r-1);
        
        arr[key] = ans;
        
        return ans;
    }
    
    if(obstacleGrid[m][n] === 1) return 0;
    
    let ansb = dfs(m,n);
    return ansb;
    
    
};
