/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    let len = s.length;
    let set = new Set();
    let ans = new Set();
    for(var i = 0; i<=len-10; i++){
        let item = s.slice(i, i+10);
        if(set.has(item)){
            ans.add(item);
        }else{
            set.add(item)
        }
    }
    
    return Array.from(ans);
};
