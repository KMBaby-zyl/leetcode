/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    let arr1 = pattern.split('');
    let arr2 = str.split(' ');
    
    let map = {};
    
    if(arr1.length != arr2.length) return false;
    
    for(var i = 0; i<arr1.length; i++){
        if(map[arr1[i]] === undefined){
            if(map['b#'+arr2[i]]) return false; 
            
            map[arr1[i]] = arr2[i];
            map['b#' + arr2[i]] = arr1[i];
        }else if(map[arr1[i]] != arr2[i]){
            return false;
        }
    }
    
    return true;
};
