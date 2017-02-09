/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length) return false;
    let map = {};
    for(var i = 0; i<s.length; i++){
        if(map[s[i]] === undefined) map[s[i]] = 1;
        else
            map[s[i]]++;
    }
    
    for(var i = 0; i<s.length; i++){
        if(map[t[i]] === undefined) return false;
        if(map[t[i]] === 0) return false;
        else
            map[t[i]]--
    }
    
    return true;
};
