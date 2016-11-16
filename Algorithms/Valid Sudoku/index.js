/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    console.log(board);
    
    for(var i = 0; i<9; i++){
        let a = [];
        let r = board[i];
        
        for(var j = 0; j<9; j++){
            if(a.indexOf(r[j]) === -1){
                if(r[j] !== '.') a.push(r[j])
            }else{
                return false;
            }
        }
    }
    
    for(var i = 0; i<9; i++){
        let a = [];
        
        for(var j = 0; j<9; j++){
            if(a.indexOf(board[j][i]) === -1){
                if(board[j][i] !== '.') a.push(board[j][i])
            }else{
                return false;
            }
        }
    }
    
    
    for(var i =0; i<=6; i= i+3){
        for(var j =0; j<=6; j= j+3){
            let a = [];
            
            for(var k = i; k<(i+3); k++){
                for(var l = j; l<(j+3); l++){
                    if(board[k][l] !== '.') {
                       
                        
                        if(a.indexOf(board[k][l]) !== -1) return false; 
                        
                        a.push(board[k][l]);
                    }
                }
            }
            console.log(a);
        }
    }
    
    
    return true;
};
