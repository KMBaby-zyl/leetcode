/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.replace(/(\S*)\s+$/, '$1');
    let a = s.split(' ');
    
    return a[a.length - 1].length;
};
