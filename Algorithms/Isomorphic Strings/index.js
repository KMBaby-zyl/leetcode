/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let map = {};
    let bmap = {};
    for(var i = 0; i<s.length; i++){
        if(map[s[i]]){
            if(map[s[i]] != t[i]) return false;
        }else if(bmap[t[i]]){
            return false;
        }else{
            map[s[i]] = t[i];
            bmap[t[i]] = 1;
        }
        
        
    }
    
    return true;
};
