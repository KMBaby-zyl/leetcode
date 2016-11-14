/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let arr = [];
    let map = {
        '(': 1,
        ')': -1,
        '{': 2,
        '}': -2,
        '[': 3,
        ']': -3
    }
    let len = s.length;
    
    for(var i = 0; i<len; i++){
        let val = s[i];
        
        if(map[val] > 0){
            arr.push(map[val]);
        }
        if(map[val] < 0){
            var v = arr.pop();
            if(!v) return false;
            
            if((v + map[val]) !== 0){
                return false;
            }
        }
    }
    
    if(arr.length > 0) return false;
    
    return true;
};
