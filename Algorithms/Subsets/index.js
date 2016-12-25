/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    function getItems(arr, klen){
        let items = [];
        if(klen === 0) return [];
        for(var m = 0; m<=(arr.length - klen); m++){
            if(klen === 1){
                items.push([arr[m]]);
            }else{
                let els = getItems(arr.slice(m+1), klen - 1);
                els.forEach(function(item){
                    items.push([arr[m]].concat(item));
                });
            }
            
        }
        
        return items;
    }
    
    let ans = [[]];
    
    for(var i = 0; i<=nums.length; i++){
        ans = ans.concat(getItems(nums, i));
    }
    
    return ans;
};
