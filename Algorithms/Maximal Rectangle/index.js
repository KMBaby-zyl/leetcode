/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    let m = matrix.length;
    if(m === 0) return 0;
    let n = matrix[0].length;
    let max = 0;
    let INF = 1000000;
    
    for(var i = 0; i<m; i++){
        for(var j = 0; j<n; j++){
            if(matrix[i][j] === '1'){
                max = Math.max(max, find(i, j));
            }
        }
    }
    
    function find(x, y){
        let heights = [];
        for(var i = x; i<m; i++){
            let item = 0;
            for(var j = y; j<n; j++){
                if(matrix[i][j] === '1'){
                    item++;
                }else if(j === y){
                    i = INF;
                    j = INF;
                }else{
                    j = INF;
                }
            }
            heights.push(item);
        }
        return largestRectangleArea(heights);
    }
    
    function largestRectangleArea(heights) {
        let max = 0;
        let INF = 10000000;
        let stack = [];
        heights.push(0);
        for(var i = 0; i<heights.length; i++){
            if(stack.length === 0 || heights[stack.slice(-1)[0]] < heights[i]){
                stack.push(i);
            }else{
                let t = stack.pop();
                max = Math.max(max, (stack.length === 0 ? i : (i-stack.slice(-1)[0] -1)) * heights[t]);
                i--;
            }
        }
        
        return max;
    };
    
    return max;
};
