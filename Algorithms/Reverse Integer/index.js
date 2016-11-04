/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    var rs = '1';
    if(n == 1){
        return rs;
    }
    
    function newrs(string){
        var r = [],
            j = string[0],
            t = 1;
            
        for(var i = 1; i < string.length; i++){
            if( string[i] == j){
                t++;
            }else{
                r.push( String(t) + j);
                j = string[i];
                t = 1;
            }
        }
        r.push( String(t) + j);
        return r.join('');
    }
    
    for(var i=1; i< n; i++){
        rs = newrs(rs);
    }
    
    return rs;
};
