/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    citations = citations.sort(function(a,b){return b-a});
    
    let index = 0;
    for(var i = 0; i<citations.length; i++){
        if(i >= citations[i]){
            return index;
        }else{
            index++;
        }
    }
    
    return index;
};
