/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
    let m = dungeon.length;
    let n = dungeon[0].length;
    
    
    let Dynamic = [];
    for(var i = m-1; i>=0; i--){
        Dynamic[i] = [];
    }
    Dynamic[m-1][n-1] = dungeon[m-1][n-1] > 0 ? 1 : (1-dungeon[m-1][n-1]);
    
    for(var i = m-2; i>=0; i--){
         Dynamic[i][n-1] = Math.max(1, Dynamic[i+1][n-1]-dungeon[i][n-1]);
    }
     for(var j = n-2; j>=0; j--){
         Dynamic[m-1][j] = Math.max(1, Dynamic[m-1][j+1]-dungeon[m-1][j]);
    }
    
    for(var i = m-2; i>=0; i--){
        for(var j = n-2; j>=0; j--){
            Dynamic[i][j] = Math.max(1, Math.min(Dynamic[i+1][j], Dynamic[i][j+1]) - dungeon[i][j]);
        }
    }
    
    return Dynamic[0][0];
    
};
