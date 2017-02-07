/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    let m = matrix.length;
    if(m === 0) return 0;
    let n = matrix[0].length;
    let ans = 0;
    
    for(var i = 0; i<m; i++){
        for(var j=0; j<n; j++){
            find(i,j);
        }
    }
    
    function find(x,y){
        let max = 0;
        let num = 0;
        let flag = true;
        
        while(flag && (x+num) < m && (y+num) < n ){
            for(var i = 0; i<=num; i++){
                if(matrix[x+i][y+num] != 1) flag = false;
                if(matrix[x+num][y+i] != 1) flag = false;
            }
            
            if(flag){
                max++;
            }
            num++;
        }
        
        
        ans = Math.max(ans, max);
    }
    
    return ans * ans;
};
