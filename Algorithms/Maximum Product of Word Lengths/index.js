/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    let ans = 0;
    for(var i = 0; i<words.length; i++){
        let s1 = words[i];
        for(var j = i+1; j<words.length; j++){
            let s2 = words[j];
            let len = s1.length * s2.length;
            let temp = ans;
            ans = Math.max(ans, len);
            for(var k = 0; k<s1.length; k++){
                let char = s1[k];
                if(s2.indexOf(char) !=-1){
                    ans = temp;
                    break;
                }
            }
        }
    }
    
    return ans;
};
