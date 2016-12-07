/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if(nums.length === 1) {
        return true;
    }
    
    let x = nums.length -1;
    
    for(let i=nums.length-2; i>=0; i--){
        if( (x - i) <= nums[i]){
            x = i;
        }
    }

    return x === 0
};
