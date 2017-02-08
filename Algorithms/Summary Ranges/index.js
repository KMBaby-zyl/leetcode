/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let ans = [];
    if(nums.length === 0) return ans;
    
    let index = 0;
    
    for(var i = 1; i<nums.length; i++){
        if((nums[i] - nums[index]) === (i - index)){
            continue;
        }else{
            if((i-1) === index){
                ans.push(''+nums[index]);
            }else{
                ans.push(nums[index] + '->' + nums[i-1])
            }
            
            index = i;
        }
    }
    
    if(index < (nums.length - 1)){
        ans.push(nums[index] + '->' + nums[nums.length - 1])
    }else{
        ans.push('' + nums[index]);
    }
    
    return ans;
};
