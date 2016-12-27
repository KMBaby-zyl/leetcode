/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let ans = [];
    let m = nums.length;
    
    for(var i = 0; i<= m; i++){
        ans = ans.concat(getItems(nums, i));
    }
    
    function getItems(arr, klen){
        let items = [];
        if(klen === 0) return [[]];
        
        let map = {};
        for(var m = 0; m<=(arr.length - klen); m++){
            if(klen === 1){
                if(!map[arr[m]]){
                    items.push([arr[m]]);
                    map[arr[m]] = true;
                }
            }else{
                let els = getItems(arr.slice(m+1), klen - 1);
                els.forEach(function(item){
                    let nItem = [arr[m]].concat(item).sort(function(a,b){return a-b});
                    if(!map[nItem.join('$')]){
                        items.push(nItem);
                        map[nItem.join('$')] = true;
                    }
                });
            }
            
        }
        
        return items;
    }
    
    return ans;
};
