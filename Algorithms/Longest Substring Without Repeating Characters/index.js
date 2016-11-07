/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let i = 0;
    let map = [];
    let length = 0;
    let maxLength = 0;
    
    while(i < s.length){
        let index = map.indexOf(s[i]);
        if(index === -1){
            map.push(s[i]);
            length++;
        }else{
            map = map.slice(index + 1);
            map.push(s[i]);
            maxLength = Math.max(length, maxLength);
            length = map.length;
        }
        
        i++;
    }
    
    maxLength = Math.max(length, maxLength);
    
    return maxLength;
    
    
    
    
};
