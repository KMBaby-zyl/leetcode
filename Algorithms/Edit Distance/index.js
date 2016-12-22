/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let arr = [];
    let n = word1.length;
    let m = word2.length;
    for(var i = 0; i<=n; i++){
        arr[i] = [];
    }
    
    for(var i = 0; i<=n; i++){
        arr[i][0] = i;
    }
    
    for(var j =0; j<=m; j++){
        arr[0][j] = j;
    }
    
    for(var i = 1; i <= n ; i++){
        for(var j =1; j<=m ; j++){
            if(word1.charAt(i-1) === word2.charAt(j-1)){
                arr[i][j] = arr[i-1][j-1];
            }else{
                arr[i][j] = Math.min(arr[i-1][j-1] + 1, Math.min(arr[i][j-1] + 1, arr[i-1][j] +1));
            }
        }
    }
    
    return arr[n][m]
};
