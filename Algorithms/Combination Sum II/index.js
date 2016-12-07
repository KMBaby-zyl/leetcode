/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let samearr = [];
    
    candidates.sort(function(a,b){ return b-a});
    let len = candidates.length;
    
    let beibao = function(left, _target){
        if(left === len) return [];
        
        if(samearr.indexOf(_target) !== -1) return samearr[_target];
        
        
        let arr = [];
        for(var i = left; i<len; i++){
            let new_target = _target - candidates[i];
            
            if(i>left && candidates[i] === candidates[i -1 ]) continue;
            
            if(new_target < 0) continue;
            
            if( new_target > 0) {
                let r = beibao(i+1, new_target);
                r.map(function(item){
                    let _item = item.slice(0);
                    _item.push(candidates[i]);
                    arr.push(_item);
                })
                
                continue;
            }
            
            
            if(new_target === 0) {
                arr.push([_target])
                continue;
            }
            
            
        }
        
        samearr.push(arr);
        return arr;
    }
    
    return beibao(0, target);
    
};
