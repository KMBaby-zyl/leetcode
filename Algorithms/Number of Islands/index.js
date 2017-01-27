/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let m = grid.length;
    if(m === 0) return 0;
    let n = grid[0].length;
    let ans = 0;
    
    function search(x,y){
        if( grid[x][y] !== '1') return;
        
        ans++;
        grid[x][y] = '#';
        
        change(x-1,y);
        change(x+1,y);
        change(x,y-1);
        change(x,y+1);
    }
    
    function change(x,y){
        if(x<0 || y <0 || x === m || y === n) return;
        
        if(grid[x][y] != '1') return;
        grid[x][y] = '#';
        
        change(x-1,y);
        change(x+1,y);
        change(x,y-1);
        change(x,y+1);
    }
    
    for(var i = 0; i <m ; i++){
        for(var j = 0; j<n; j++){
            search(i,j);
        }
    }
    
    
    return ans;
    
};
