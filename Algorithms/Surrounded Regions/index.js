/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    let m = board.length;
    if(m === 0) return ;
    let n = board[0].length;
    let queue = [];
    
    for(i=0;i<m;i++){
        queue.push([i,0])
        if(n>1) queue.push([i,n-1])
    }
    for(j=1;j+1<n;j++){
        queue.push([0,j])
        if(m>1) queue.push([m-1,j])
    }
                    
    while (queue.length>0){
        let item = queue.shift();
        let x = item[0];
        let y = item[1];
        if(x>=0 && x<m && y>=0 && y<n && board[x][y] === 'O'){
            board[x][y] = "D"
            queue.push([x-1, y]); queue.push([x+1, y])
            queue.push([x, y-1]); queue.push([x, y+1])
        }
    }
            
    for(var i = 0; i<m; i++){
        for(var j = 0; j<n; j++){
            if(board[i][j] === 'D'){
                board[i][j]  = 'O'
            }else if(board[i][j]  === 'O'){
                board[i][j]  = 'X'
            }
        }
    }
    
    
    
};
