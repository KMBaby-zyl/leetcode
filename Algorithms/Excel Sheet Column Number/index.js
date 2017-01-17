/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    
    var map = {};
    arr.map(function(item, index){
        map[item] = index + 1;
    })
    
    let ans = 0;
    let z = 1;
    for(var i = s.length-1; i>=0; i-- ){
        ans = ans + z * map[s[i]];
        z = z *26;
    }
    
    return ans;
};
