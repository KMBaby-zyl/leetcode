/**
 * @param {number} n
 * @return {string[]}
 */

let ans = [];

function dfs(s, left, right, n){
    if(left === n && right ===n){
        ans.push(s);
        return;
    }
    
    if(left < n){
        dfs(s + '(', left + 1, right, n);
    }
    
    if(right < left){
        dfs(s + ')', left, right + 1, n);
    }
};

var generateParenthesis = function(n) {
     ans = [];
     dfs('', 0,0,n);
     return ans;
};




