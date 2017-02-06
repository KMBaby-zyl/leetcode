/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length === 0) return 0;
    if(nums.length === 1) return nums[0];
    if(nums.length === 2) return Math.max(nums[0], nums[1]);
    
    let dt = [];
    dt[0] = 0;
    dt[1] = nums[0];
    dt[2] = Math.max(nums[0], nums[1]);
    
    for(var i = 3; i< nums.length; i++){
        dt[i] = Math.max(dt[i-2] + nums[i-1], dt[i-3] + nums[i-2])
    }
    dt[nums.length] = dt[nums.length-1]
    
    let dt2 = [];
    dt2[0] = 0;
    dt2[1] = 0;
    dt2[2] = nums[1];
    
    for(var i = 3; i<= nums.length; i++){
        dt2[i] = Math.max(dt2[i-2] + nums[i-1], dt2[i-3] + nums[i-2])
    }
    
    return Math.max(dt[nums.length], dt2[nums.length])
};
