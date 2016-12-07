/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {};
    
    
    strs.map(function(item){
        let key = item.split('').sort().join('');
        if(!map[key]) map[key] = [item];
        else map[key].push(item);
    });
    
    let ans = [];
    for(var i in map){
        ans.push(map[i]);
    }
    
    return ans;
};
