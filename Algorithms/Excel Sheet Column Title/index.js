/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    n = n-1;
    
    var map = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    
    function create(n){
        if(n<0) return '';
        let a = ~~(n/26);
        let b = n%26;
        
        return create(a-1) + map[b];
    }
    
    return create(n);
};
