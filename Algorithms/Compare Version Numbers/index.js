/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let a = version1.split('.');
    let b = version2.split('.');
    
    for(var i = 0; i<a.length; i++){
        if(~~a[i] > ~~b[i]) return 1
        else if(~~a[i] < ~~b[i]) return -1
    }
    
    for( ; i<b.length; i++){
        if(~~b[i]>0) return -1;
    }
    
    
    return 0;
};
