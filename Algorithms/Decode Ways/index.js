/**
 * @param {string} s
 * @return {number}
 */
let map = {};
var numDecodings = function(s) {
    let ans = 0;
    
    if(map[s]) return map[s];
    
    if(s.length === 0) return 0;
    if(s[0] === '0') return 0;
    
    if(s.length === 1) return 1;
    if(s.length === 2) {
        if( ~~s.slice(0,2) <= 26){
            if(s[1] !== '0'){
                return 2;
            }else{
                return 1;
            }
        }else if(s[1] !== '0'){
            return 1;
        }else{
            return 0;
        }
    }
    
    if(s[1] !== '0'){
        ans = ans + numDecodings(s.slice(1));
    }
    
    
    if( ~~s.slice(0,2) <= 26){
        ans = ans + numDecodings(s.slice(2));
    }
    
    map[s] = ans;
    return ans;
};
