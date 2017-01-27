/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let map = {};
    
    n = '' + n;
    
    map[n] = 1;
    
    while(n != '1'){
        let t = 0;
        for(var i = 0; i<n.length; i++){
            t = t + n[i] * n[i];
        }
        
        n = '' + t;
        if(map[n] === 1) return false;
        map[n] = 1;
    }
    
    return true;
};
