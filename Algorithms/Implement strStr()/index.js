/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let reg = new RegExp(needle);
    
    return haystack.search(reg);
    
};
