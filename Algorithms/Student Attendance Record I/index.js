/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    var a = 1;
    
    for(var i = 0; i<s.length; i++){
        if(s[i] === 'A'){
            a--;
            if(a < 0) return false;
        }
    }
    
    if(s.split('LLL').length >= 2) return false;
    
    return true;
};
