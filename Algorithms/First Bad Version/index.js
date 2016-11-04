/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        var s = 1,
            e = n;
        
        if(isBadVersion(1)){
            return 1;   
        }
        
        while (true){
            var a = parseInt((s+e)/2);
            if(a == s){
                return e;
            }
            
            if(isBadVersion(a)){
                e = a;
            }else{
                s = a;
            }
        }
    };
};
