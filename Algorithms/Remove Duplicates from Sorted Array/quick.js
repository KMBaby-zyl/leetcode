/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length < 2) return nums;
    
    let i = nums.length - 2;
    while(i>=0){
        if(nums[i] === nums[i+1]){
            nums.splice(i+1,1);
        }
        
        i--;
    }
    
    return nums.length;
};
