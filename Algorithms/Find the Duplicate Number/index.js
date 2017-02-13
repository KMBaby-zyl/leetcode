/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    for(var i = 0; i<nums.length; i++){
        if(nums.indexOf(nums[i],i+1) !== -1){
            return nums[i];
        }
    }
};

