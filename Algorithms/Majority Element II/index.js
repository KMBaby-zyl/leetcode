/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    if(nums.length === 0) return [];
    if(nums.length === 1) return [nums[0]];
    
    let index = 0;
    nums = nums.sort(function(a,b){return a-b});
    
    let ans = [];
    let limit = ~~(nums.length/3);
    
    let len = nums.length;
    for(var i = 1; i<nums.length; i++){
        if(nums[i] === nums[index]) continue;
        else{
            if((i-index) > limit){
                ans.push(nums[index]);
            }
            index = i;
        }
    }
    
    if((nums.length - index) > limit){
        ans.push(nums[index]);
    }
    
    return ans;
};
