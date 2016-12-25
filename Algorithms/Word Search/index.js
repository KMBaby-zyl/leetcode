/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let points = [];
    
    if(word === '') return false;
    
    let s = word[0];
    for(var i = 0; i<board.length; i++){
        for(var j = 0; j<board[i].length; j++){
            if(board[i][j] === s){
                points.push([[i, j].join('$')]);
            }
        }
    }
    console.log(points);
    if(points.length === 0) return false;
    
    
    
    function dfs(arr, wlen){
        if(wlen === word.length) return true;
        
        let new_points = [];
        let p = arr.slice(-1)[0];
        let x = ~~p.split('$')[0];
        let y = ~~p.split('$')[1];
        let key1 = [x,y+1].join('$');
        let key2 = [x,y-1].join('$');
        let key3 = [x+1,y].join('$');
        let key4 = [x-1,y].join('$');
        let ans = false;
        
        if(board[x][y+1] === word[wlen] && arr.indexOf(key1) === -1) 
            ans = ans || dfs(arr.concat(key1), wlen + 1);
        if(board[x][y-1] === word[wlen] && arr.indexOf(key2) === -1)
            ans = ans || dfs(arr.concat(key2), wlen + 1);
        if(board[x+1] && board[x+1][y] === word[wlen] && arr.indexOf(key3) === -1) 
            ans = ans || dfs(arr.concat(key3), wlen + 1);
        if(board[x-1] && board[x-1][y] === word[wlen] && arr.indexOf(key4) === -1) 
            ans = ans || dfs(arr.concat(key4), wlen + 1);
        
        return ans;
    }
    
    for(var j = 0; j< points.length; j++){
        if(dfs(points[j], 1)){
            return true;
        }
    }
        
    
    
    return false;
};
