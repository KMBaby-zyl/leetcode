/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    nums.sort(function(a,b){ return a-b });
    
    let start = nums.indexOf(1);
    let len = nums.length;
    if(start === -1) return 1;
    
    for(var i = 1; i<(len-start) ; i++){
        if( (nums[start+i] - nums[start+i-1]) > 1) return nums[start+i-1] + 1;
    }
    
    return nums[len - 1] + 1;
};
