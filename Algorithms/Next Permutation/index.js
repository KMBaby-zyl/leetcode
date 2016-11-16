/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if(nums.length > 1){
        let end = false;
        let len = nums.length;
        
        for(var i = nums.length-2; i>=0; i--){
            
            for(var j = len -1; j> i; j--){
                if(nums[i]<nums[j]){
                    let  tmp = nums[i];
                    nums[i] = nums[j];
                    nums[j] = tmp;
                    
                    var sn = nums.splice(i+1).sort(function(a,b){
                        return a-b;
                    });
                
                    sn.map(function(i){
                        nums.push(i);
                    })
                    
                    j = -1;
                    i = -1;
                    end = true;
                }
            }
            
            continue;
        }
        
        if(!end){
            nums.sort(function(a,b){
                return a-b;
            })
        }
    }
};
