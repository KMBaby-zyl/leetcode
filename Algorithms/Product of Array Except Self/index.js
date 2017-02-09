/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let all = 1;
    let zero = 0;
    
    for(var i = 0; i<nums.length; i++){
        if(nums[i] === 0){
            zero++;
            continue;
        }
        all = all * nums[i];
    }
    
    for(var i = 0; i<nums.length; i++){
        if(zero >= 2) {
            nums[i] = 0;
        } else if(zero === 1){
            if(nums[i] === 0){
                nums[i] = all;
            }else{
                nums[i] = 0;
            }
            
        } else {
            nums[i] = all / nums[i];
        }
        
    }
    
    return nums
};
