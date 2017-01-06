/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let min = 1000000;
    
    let map = {}
    let len = triangle.length;
    for(var i = 0; i<len; i++){
        min = Math.min(min, dfs(i, len-1))
    }
    
    function dfs(index, row){
        if(row === 0) return triangle[0][0];
        let key = [index, row].join('$');
        if(map[key]) return map[key];
        
        let ans;
     
        if(index === 0){
            ans = triangle[row][index] + dfs(0, row-1);
        }else if(index === row){
            ans = triangle[row][index] + dfs(index-1, row-1);
        }else{
            ans = triangle[row][index] + Math.min(dfs(index, row-1) , dfs(index-1, row-1));
        }
        
        map[key] = ans;
        return ans;
    }
    
    return min;
    
};
