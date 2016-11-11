/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let len = strs.length;
    let r = '';
    
    if(len === 0) return '';
    
    for(var j=0; j<strs[0].length; j++){
        let cm = strs[0][j];
        
        for(var i=0; i<len; i++){
            if(strs[i][j] != cm){
                return r;
            }
        }
        
        r = r + cm;
    }
    
    return r;
};
