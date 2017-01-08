/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let a = 0;
    let e = s.length - 1;
    s = s.toLowerCase();
    let ans = true;
    while(a < e){
        if( !/\w/.test(s[a]) ){
            a++;
            continue;
        }
        if( !/\w/.test(s[e]) ){
            e--;
            continue;
        }
        if(s[a] !== s[e]) return false;
        else{
            a++;
            e--;
            ans = true;
        }
    }
    
    return ans;
};
