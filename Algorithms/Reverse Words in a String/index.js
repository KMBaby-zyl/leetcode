/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    str = str.replace(/\s+/gi, ' ');
    if(str[0] === ' ') str = str.slice(1);
    if(str.slice(-1) === ' ') str = str.slice(0, -1);
    
    let arr = str.split(' ');
    arr = arr.reverse();
    return arr.join(' ');
};
