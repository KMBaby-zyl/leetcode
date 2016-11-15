/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0;
    while(nums[i] !== undefined){
        if(nums[i] === nums[i-1]){
            nums.splice(i,1);
            continue;
        }
        
        i++;
    }
    
    return nums.length;
};
