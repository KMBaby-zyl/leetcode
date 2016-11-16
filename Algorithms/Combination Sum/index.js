/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    
    let next_targets = [];
    
    // let ans = [];
    
    // let real = target;
    
    
    function beibao(target, pret){
        let arr = [];
        // if(next_targets.indexOf(target) > 0) return arr;
        
        // next_targets.push(target);
        
        candidates.map(function(i){
            
            if((target > i) && (pret >= i)){
                // console.log(target + '-' + pret + '-' + i);
                
                let a = beibao(target - i, i);
                // console.log(a);
                a.map(function(item){
                    item.unshift(i);
                    arr.push(item);
                });
                    
                // if(target === real){
                //     // ans.push(a);
                // }
                
            }
        });
        
        if( (candidates.indexOf(target) !== -1) && (target <= pret)) {
            arr.push([target]);
        }
        
        return arr;
    }
    
    
    
    
    return beibao(target, target);
};


