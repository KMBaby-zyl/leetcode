/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    if(k > n) return [];
    
    let arr = [];
    for(var i = 1; i<=n; i++){
        arr.push(i);
    }
    
    
    function getItems(arr, klen){
        let items = [];
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
        
    return getItems(arr, k);
    
};
