/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if(nums.length === 1) return 0;
    
    for(var i = 1; i<nums.length-1; i++){
        if(nums[i] > nums[i-1] && nums[i] > nums[i+1]){
            return i;
        }
    }
    
    if(nums[0] > nums[nums.length-1]){
        return 0
    }else{
        return nums.length-1
    }
};
