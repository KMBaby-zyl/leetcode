/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let max = 0;
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
