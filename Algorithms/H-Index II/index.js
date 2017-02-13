/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let index = 0;
    let len = citations.length;
    for(var i = 0; i<len; i++){
        if(i >= citations[len-i-1]){
            return index;
        }else{
            index++;
        }
    }
    
    return index;
};
